import React, {useState, useLayoutEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';

import CalcButton from '../../components/CalcButtons';
import {styles} from './style';
import authAction from '../../redux/auth/actions';
import historyAction from '../../redux/historyApi/actions';
import {RULES} from '../../constants/rules';
import {buttonsCreator} from '../../utils/buttons';

const mapStateToProps = state => {
  const {user, history} = state;
  return {user, history};
};

const Display = ({navigation}) => {
  const [userText, setUserText] = useState('');
  const [calcText, setCalcText] = useState('');
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.btnLogOut}
          onPress={() => dispatch(authAction.logOut(navigation))}>
          <Text style={styles.logOutTxt}>Logout</Text>
        </TouchableOpacity>
      ),
    });
  });

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

  const saveExpression = exp => {
    dispatch(historyAction.createExpression([userText]));
  };

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{calcText}</Text>
        <TouchableOpacity
          onPress={() => saveExpression(userText)}
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
