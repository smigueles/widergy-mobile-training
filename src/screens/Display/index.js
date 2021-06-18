import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';

import CalcButton from '../../components/CalcButtons';
import {styles} from './style';
<<<<<<< HEAD
import {createButtons} from '../../utils/createButtons';
import {RULES} from '../../constants/rules';
=======
import {saveExp} from '../../redux/actions';
import {RULES} from '../../constants/rules';
import {buttonsCreator} from '../../utils/buttons';
>>>>>>> navigation

const Display = ({navigation}) => {
  const [userText, setUserText] = useState('');
  const [calcText, setCalcText] = useState('');
<<<<<<< HEAD
=======
  const dispatch = useDispatch();
>>>>>>> navigation

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

<<<<<<< HEAD
  const buttons = createButtons(userText, setUserText, setCalcText);
=======
  const buttons = buttonsCreator(userText, setUserText, setCalcText);
>>>>>>> navigation

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('History')}
        style={styles.navigateButton}>
        <Text style={styles.navigateTxt}>Go to History</Text>
      </TouchableOpacity>
      <View style={styles.result}>
        <Text style={styles.resultText}>{calcText}</Text>
        <TouchableOpacity
          onPress={() => dispatch(saveExp(userText))}
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

export default Display;
