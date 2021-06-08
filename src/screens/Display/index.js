import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, Alert, Button} from 'react-native';

import CalcButton from '../../components/CalcButtons';
import {styles} from './style';
import {saveExp, clearRegisters} from '../../redux/actions';
import Record from '../Record';
import {RULES} from '../../constants/rules';
import {buttonsCreator} from '../../utils/buttons';

const mapStateToProps = state => {
  const {history} = state;
  return {history};
};

const Display = ({history, saveExp, clearRegisters}) => {
  const [userText, setUserText] = useState('');
  const [calcText, setCalcText] = useState('');

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

  return (
    <View style={styles.container}>
      <Record />
      <View style={styles.result}>
        <Text style={styles.resultText}>{calcText}</Text>
        <Button title="Add" onPress={() => saveExp(userText)} />
        {history.registers.length !== 0 && (
          <Button title="Clear" onPress={() => clearRegisters()} />
        )}
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

export default connect(mapStateToProps, {
  saveExp,
  clearRegisters,
})(Display);
