import React from 'react';
import {Text, TextInput} from 'react-native';

import {styles} from './style';

const PassInput = ({
  label,
  input: {onChange, ...restInput},
  meta: {touched, error},
}) => {
  return (
    <React.Fragment>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={onChange}
        {...restInput}
        placeholder={label}
      />
      {touched && error && <Text>{error}</Text>}
    </React.Fragment>
  );
};

export default PassInput;
