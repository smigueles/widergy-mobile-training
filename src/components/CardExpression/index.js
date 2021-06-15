import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useDispatch} from 'react-redux';

import {styles} from './style';
import historyAction from '../../redux/historyApi/actions';
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
    dispatch(historyAction.editExpressions(id, exp));
    setShow(!show);
    setEditTxt('');
  };

  const saveCondition = () => {
    return editTxt !== ''
      ? () => save(editTxt, n.id)
      : () => save(n.expression, n.id);
  };

  const deleteExpression = id => {
    dispatch(historyAction.deleteExpresionById(id));
  };

  return (
    <View style={styles.box}>
      <TextInput
        style={styles.text}
        placeholder={n.expression}
        onKeyPress={handleEditTxt}
        value={editTxt}
        editable={!show}
      />
      <TouchableOpacity
        onPress={() => deleteExpression(n.id)}
        style={styles.btn}>
        <Text style={styles.btnText}>X</Text>
      </TouchableOpacity>
      {show ? (
        <TouchableOpacity onPress={() => setShow(!show)} style={styles.btn}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={saveCondition()} style={styles.btn}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CardExpression;
