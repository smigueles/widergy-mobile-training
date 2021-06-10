import React, {useState} from 'react';
<<<<<<< HEAD
import {useDispatch} from 'react-redux';
=======
import {connect} from 'react-redux';
>>>>>>> 12d16d7ce42a881e36694ed36e4b1dd6fe273482
import {View, Text, TextInput, Alert, TouchableOpacity} from 'react-native';

import CalcButton from '../../components/CalcButtons';
import {styles} from './style';
import {saveExp} from '../../redux/actions';
import {RULES} from '../../constants/rules';
import {buttonsCreator} from '../../utils/buttons';

<<<<<<< HEAD
const Display = ({navigation}) => {
  const [userText, setUserText] = useState('');
  const [calcText, setCalcText] = useState('');
  const dispatch = useDispatch();
=======
const Display = ({saveExp, navigation}) => {
  const [userText, setUserText] = useState('');
  const [calcText, setCalcText] = useState('');
>>>>>>> 12d16d7ce42a881e36694ed36e4b1dd6fe273482

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
      <TouchableOpacity
        onPress={() => navigation.navigate('History')}
        style={styles.navigateButton}>
        <Text style={styles.navigateTxt}>Go to History</Text>
      </TouchableOpacity>
      <View style={styles.result}>
        <Text style={styles.resultText}>{calcText}</Text>
        <TouchableOpacity
<<<<<<< HEAD
          onPress={() => dispatch(saveExp(userText))}
=======
          onPress={() => saveExp(userText)}
>>>>>>> 12d16d7ce42a881e36694ed36e4b1dd6fe273482
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

<<<<<<< HEAD
export default Display;
=======
export default connect(null, {
  saveExp,
})(Display);
>>>>>>> 12d16d7ce42a881e36694ed36e4b1dd6fe273482
