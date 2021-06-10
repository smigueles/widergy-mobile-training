import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
<<<<<<< HEAD
import {useDispatch} from 'react-redux';
=======
import {connect} from 'react-redux';
>>>>>>> 12d16d7ce42a881e36694ed36e4b1dd6fe273482

import {styles} from './style';

import {deleteExp, editExp} from '../../redux/actions';
import {RULES} from '../../constants/rules';

<<<<<<< HEAD
const CardExpression = ({n}) => {
  const [show, setShow] = useState(false);
  const [editTxt, setEditTxt] = useState('');
  const dispatch = useDispatch();
=======
const CardExpression = ({n, deleteExp, editExp}) => {
  const [show, setShow] = useState(false);
  const [editTxt, setEditTxt] = useState('');
>>>>>>> 12d16d7ce42a881e36694ed36e4b1dd6fe273482

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
<<<<<<< HEAD
    dispatch(editExp(exp, id));
=======
    editExp(exp, id);
>>>>>>> 12d16d7ce42a881e36694ed36e4b1dd6fe273482
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
<<<<<<< HEAD
      <TouchableOpacity
        onPress={() => dispatch(deleteExp(n.id))}
        style={styles?.btn}>
=======
      <TouchableOpacity onPress={() => deleteExp(n.id)} style={styles?.btn}>
>>>>>>> 12d16d7ce42a881e36694ed36e4b1dd6fe273482
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

<<<<<<< HEAD
export default CardExpression;
=======
export default connect(null, {deleteExp, editExp})(CardExpression);
>>>>>>> 12d16d7ce42a881e36694ed36e4b1dd6fe273482
