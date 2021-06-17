import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';

import CalcButton from '../../components/CalcButtons';
import {styles} from './style';
import historyAction from '../../redux/historyApi/actions';
import {RULES} from '../../constants/rules';
import {buttonsCreator} from '../../utils/buttons';

const mapStateToProps = state => {
  const {history, user, historyApi} = state;
  return {history, user, historyApi};
};

const Display = ({user}) => {
  const [userText, setUserText] = useState('');
  const [calcText, setCalcText] = useState('');
  const dispatch = useDispatch();

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
    dispatch(historyAction.createExpression([exp]));
  };

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        {user.tokenLoading && <Text>Loading</Text>}
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
