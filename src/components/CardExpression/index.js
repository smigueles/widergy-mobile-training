import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {styles} from './style';
import actionsCreator from '../../redux/actions';
import {RULES} from '../../constants/rules';

const CardExpression = ({n}) => {
  const [show, setShow] = useState(true);
  const [editTxt, setEditTxt] = useState('');
  const dispatch = useDispatch();

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
    dispatch(actionsCreator.editExp(exp, id));
    setShow(!show);
    setEditTxt('');
  };

  const saveCondition = () => {
    return editTxt !== ''
      ? () => save(editTxt, n.id)
      : () => save(n.expresion, n.id);
  };

  const deleteExpression = id => {
    dispatch(actionsCreator.deleteExp(id));
  };

  const buttonAction = show ? () => setShow(!show) : saveCondition();
  const buttontext = show ? 'Edit' : 'Save';

  return (
    <View style={styles.box}>
      <TextInput
        style={styles.text}
        placeholder={n.expresion}
        onKeyPress={handleEditTxt}
        value={editTxt}
        editable={!show}
      />
      <TouchableOpacity
        onPress={() => deleteExpression(n.id)}
        style={styles.btn}>
        <Text style={styles.btnText}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => buttonAction()} style={styles.btn}>
        <Text style={styles.btnText}>{buttontext}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardExpression;
