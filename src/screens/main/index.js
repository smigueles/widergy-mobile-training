import React, {useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';
import NUmericButtons from '../../components/NumericButtons';
import OpButtons from '../../components/OpButtons';
import {styles} from './index.style';

const Main = () => {
  const [userText, setUserText] = useState('');
  const [calcText, setCalcText] = useState('');

  const handlePress = number => {
    if (number === '=') {
      return calculation();
    }
    setUserText(userText + number);
  };

  const calculation = () => {
    // eslint-disable-next-line no-eval
    setCalcText(eval(userText));
  };

  const handleInput = event => {
    const RULES = [
      '+',
      '-',
      '/',
      '*',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
    ];
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
      'Select a number and/or  basic operator, please :)',
    );
  };

  const handleOperation = op => {
    if (op === 'Clear') {
      setUserText('');
      setCalcText(0);
      return;
    }

    if (op === 'Del') {
      setUserText(userText.toString().substring(0, userText.length - 1));
      return;
    }

    if (aOperations.includes(userText.toString().split('').pop())) return;
    setUserText(userText + op);
  };

  const mNumbers = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    ['.', 0, '='],
  ];

  const aOperations = ['Del', 'Clear', '+', '-', '*', '/'];

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>{calcText}</Text>
      </View>
      <View style={styles.calculation}>
        <TextInput
          style={styles.calcText}
          onKeyPress={handleInput}
          returnKeyType="go"
          value={userText}
        />
      </View>
      <View style={styles.buttons}>
        <NUmericButtons
          mNumbers={mNumbers}
          styles={styles}
          handlePress={handlePress}
        />
        <OpButtons
          styles={styles}
          handleOperation={handleOperation}
          aOperations={aOperations}
        />
      </View>
    </View>
  );
};

export default Main;
