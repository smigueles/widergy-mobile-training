import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, TextInput, Alert, Button, ScrollView} from 'react-native';

import CalcButton from '../../components/CalcButtons';
import {styles} from './style';
import {saveExp, deleteExp, clearRegisters, editExp} from '../../redux/actions';

const mapStateToProps = state => {
  const {history} = state;
  return {history};
};
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
const Display = props => {
  const [userText, setUserText] = useState('');
  const [calcText, setCalcText] = useState('');
  const [show, setShow] = useState(false);
  const [editTxt, setEditTxt] = useState('');

  const handleEditTxt = e => {
    if (e.nativeEvent.key === 'Backspace') {
      setEditTxt(editTxt.toString().substring(0, editTxt.length - 1));
      return;
    }
    if (RULES.some(rule => rule === e.nativeEvent.key)) {
      setEditTxt(editTxt + e.nativeEvent.key);
      return;
    }
  };

  const save = (exp, id) => {
    props.editExp(exp, id);
    setShow(!show);
    setEditTxt('');
  };

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
        {/* <Text style={styles.resultText}>{calcText}</Text> */}
        <Button title="Agregar" onPress={() => props.saveExp(userText)} />
        {/*  <Button title="clear" onPress={() => props.clearRegisters()} /> */}
        {props.history.registers.map((n, i) => (
          <View key={n.id}>
            <Text>{n.expresion}</Text>
            <Button title="x" onPress={() => props.deleteExp(n.id)} />
            {show === false ? (
              <Button title="Editar" onPress={() => setShow(!show)} key={i} />
            ) : (
              <Button
                title="Guardar"
                onPress={() => save(editTxt, n.id)}
                key={i}
              />
            )}
            {show && (
              <TextInput placeholder={n.expresion} onKeyPress={handleEditTxt} />
            )}
          </View>
        ))}
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

export default connect(mapStateToProps, {
  saveExp,
  deleteExp,
  clearRegisters,
  editExp,
})(Display);
