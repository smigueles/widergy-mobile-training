import React, {useState} from 'react';
import {View, Text, TextInput, Alert} from 'react-native';

import CalcButton from '../../components/CalcButtons';
import {styles} from './style';

const Display = () => {
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
      'Select a number and/or  basic operator(+, -, /, *), please :)',
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

    if (
      ['Del', 'Clear', '+', '-', '*', '/'].includes(
        userText.toString().split('').pop(),
      )
    ) {
      return;
    }
    setUserText(userText + op);
  };

  const BUTTONS = [
    {
      type: 'operations',
      labels: ['Del', 'Clear', '+', '-', '*', '/'],
      action: b => handleOperation(b),
    },
    {
      type: 'numbers',
      labels: [7, 8, 9],
      action: b => handlePress(b),
    },
    {
      type: 'numbers',
      labels: [4, 5, 6],
      action: b => handlePress(b),
    },
    {
      type: 'numbers',
      labels: [1, 2, 3],
      action: b => handlePress(b),
    },
    {
      type: 'numbers',
      labels: ['.', 0, '='],
      action: b => handlePress(b),
    },
  ];

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
      <CalcButton buttons={BUTTONS} />
    </View>
  );
};

export default Display;
