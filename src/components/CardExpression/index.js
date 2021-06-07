import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {styles} from './style';

import {deleteExp, editExp} from '../../redux/actions';
import {RULES} from '../../constants/rules';

const CardExpression = ({n, deleteExp, editExp}) => {
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
    editExp(exp, id);
    setShow(!show);
    setEditTxt('');
  };

  return (
    <View style={styles.box}>
      {show === false ? (
        <Text style={styles?.text}>{n.expresion}</Text>
      ) : (
        <TextInput
          style={styles?.text}
          placeholder={n.expresion}
          onKeyPress={handleEditTxt}
          value={editTxt}
        />
      )}
      <TouchableOpacity onPress={() => deleteExp(n.id)} style={styles?.btn}>
        <Text style={styles?.btnText}>X</Text>
      </TouchableOpacity>
      {show === false ? (
        <TouchableOpacity onPress={() => setShow(!show)} style={styles?.btn}>
          <Text style={styles?.btnText}>Edit</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => save(editTxt, n.id)}
          style={styles?.btn}>
          <Text style={styles?.btnText}>Save</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default connect(null, {deleteExp, editExp})(CardExpression);
