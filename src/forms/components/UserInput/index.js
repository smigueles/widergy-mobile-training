import React, {Fragment} from 'react';
import {Text, TextInput} from 'react-native';

import {styles} from './style';

const UserInput = ({
  label,
  secure = false,
  input: {onChange, ...restInput},
  meta: {submitFailed, error},
}) => {
  return (
    <Fragment>
      <TextInput
        secureTextEntry={secure}
        style={styles.input}
        onChangeText={onChange}
        {...restInput}
        placeholder={label}
      />
      {submitFailed && error && <Text>{error}</Text>}
    </Fragment>
  );
};

export default UserInput;
