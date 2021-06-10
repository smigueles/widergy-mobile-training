import React, {useState, useLayoutEffect, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';

import CalcButton from '../../components/CalcButtons';
import {styles} from './style';
import {fullState, saveExp} from '../../redux/actions';
import {RULES} from '../../constants/rules';
import {buttonsCreator} from '../../utils/buttons';
import {api} from '../../api/swaggerApi';

const mapStateToProps = state => {
  const {user, history} = state;
  return {user, history};
};

const Display = ({user, history, navigation}) => {
  const [userText, setUserText] = useState('');
  const [calcText, setCalcText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    getData();

    async function getData() {
      try {
        const response = await api.get(
          '/calc/expressions',
          {},
          {headers: {Authorization: user.token}},
        );
        const dataServer = response.data;
        if (dataServer.data) {
          dispatch(fullState(dataServer.data));
          return;
        }
        throw new Error(dataServer.error);
      } catch (err) {
        Alert.alert(err.message);
      }
    }
  }, [dispatch, user.token, history.registers]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => handleLogout()}>
          <Text>Logout</Text>
        </TouchableOpacity>
      ),
    });
  });

  async function handleLogout() {
    try {
      const logout = await api.get(
        '/auth/logout',
        {},
        {headers: {Authorization: user.token}},
      );
      const message = await logout.data.message;
      if (message !== undefined) {
        Alert.alert('See ya bro!', message);
        navigation.navigate('Welcome');
        return;
      }
      throw new Error(logout.data.error);
    } catch (err) {
      Alert.alert('Something is wrong', err.message);
    }
  }

  const calculation = () => {
    // eslint-disable-next-line no-eval
    setCalcText(eval(userText));
  };

  const handleInput = event => {
    if (event.nativeEvent.key === 'Backspace') {
      setUserText(userText.toString().substring(0, userText.length - 1));
      return;
    }
    if (event.nativeEvent.key === '=') {
      return calculation();
    }

    if (RULES.some(rule => rule === event.nativeEvent.key)) {
      setUserText(userText + event.nativeEvent.key);
      return;
    }
    Alert.alert(
      'Only numbers & basic operator',
      'Select a number and/or  basic operator(+, -, /, *), please :)',
    );
  };

  const buttons = buttonsCreator(userText, setUserText, setCalcText);
  console.log(history.registers, 'registers');

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{calcText}</Text>
        <TouchableOpacity
          onPress={() => dispatch(saveExp(userText, user.token))}
          style={styles.btnAdd}>
          <Text style={styles.btnAddTxt}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.calculation}>
        <TextInput
          style={styles.calcText}
          onKeyPress={handleInput}
          returnKeyType="go"
          value={userText}
        />
      </View>
      <CalcButton buttons={buttons} />
    </View>
  );
};

export default connect(mapStateToProps)(Display);
