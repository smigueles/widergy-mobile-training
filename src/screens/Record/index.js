import React from 'react';
import {View, Button, Text, TextInput} from 'react-native';

const Record = ({
  history,
  show,
  save,
  editTxt,
  handleEditTxt,
  setShow,
  deleteExp,
  styles,
}) => {
  return (
    <View style={styles?.history}>
      {history.registers.map((n, i) => (
        <View key={n.id}>
          {show === false ? (
            <Text>{n.expresion}</Text>
          ) : (
            <TextInput placeholder={n.expresion} onKeyPress={handleEditTxt} />
          )}
          <Button title="x" onPress={() => deleteExp(n.id)} />
          {show === false ? (
            <Button title="Editar" onPress={() => setShow(!show)} key={i} />
          ) : (
            <Button
              title="Guardar"
              onPress={() => save(editTxt, n.id)}
              key={i}
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default Record;
