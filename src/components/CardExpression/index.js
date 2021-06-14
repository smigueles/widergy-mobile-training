import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import {useDispatch} from 'react-redux';

import {styles} from './style';
import historyAction from '../../redux/historyApi/actions';
import {RULES} from '../../constants/rules';

const CardExpression = ({n, navigation}) => {
  const [show, setShow] = useState(false);
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
    dispatch(historyAction.editExpressions(id, exp, navigation));
    setShow(!show);
    setEditTxt('');
  };

  return (
    <View style={styles.box}>
      {show === false ? (
        <Text style={styles.text}>{n.expression}</Text>
      ) : (
        <TextInput
          style={styles.text}
          placeholder={n.expression}
          onKeyPress={handleEditTxt}
          value={editTxt}
        />
      )}
      <TouchableOpacity
        onPress={() => dispatch(historyAction.deleteExpresionById(n.id))}
        style={styles?.btn}>
        <Text style={styles?.btnText}>X</Text>
      </TouchableOpacity>
      {show === false ? (
        <TouchableOpacity onPress={() => setShow(!show)} style={styles?.btn}>
          <Text style={styles?.btnText}>Edit</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={
            editTxt !== ''
              ? () => save(editTxt, n.id)
              : () => save(n.expresion, n.id)
          }
          style={styles?.btn}>
          <Text style={styles?.btnText}>Save</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CardExpression;
