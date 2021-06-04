import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Button, Text, TextInput} from 'react-native';

import {editExp, deleteExp} from '../../redux/actions';
import {RULES} from '../../constants/rules';

import {styles} from './style';

const mapStateToProps = state => {
  const {history} = state;
  return {history};
};

const Record = ({history, deleteExp, editExp}) => {
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
    <View style={styles?.history}>
      {history.registers.map((n, i) => (
        <View key={n.id}>
          {show === false ? (
            <Text>{n.expresion}</Text>
          ) : (
            <TextInput
              placeholder={n.expresion}
              onKeyPress={handleEditTxt}
              value={editTxt}
            />
          )}
          <Button title="x" onPress={() => deleteExp(n.id)} />
          {show === false ? (
            <Button title="Edit" onPress={() => setShow(!show)} key={i} />
          ) : (
            <Button title="Save" onPress={() => save(editTxt, n.id)} key={i} />
          )}
        </View>
      ))}
    </View>
  );
};

export default connect(mapStateToProps, {editExp, deleteExp})(Record);
