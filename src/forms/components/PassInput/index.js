import React, {Fragment} from 'react';
import {Text, TextInput} from 'react-native';

import {styles} from './style';

const PassInput = ({
  label,
  input: {onChange, ...restInput},
  meta: {submitFailed, error},
}) => {
  return (
    <Fragment>
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText={onChange}
        {...restInput}
        placeholder={label}
      />
      {submitFailed && error && <Text>{error}</Text>}
    </Fragment>
  );
};

export default PassInput;
