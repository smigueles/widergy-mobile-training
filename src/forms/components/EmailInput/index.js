import React, {Fragment} from 'react';
import {Text, TextInput} from 'react-native';

import {styles} from './style';

const EmailInput = ({
  label,
  input: {onChange, ...restInput},
  meta: {submitFailed, error},
}) => {
  return (
    <Fragment>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        {...restInput}
        placeholder={label}
      />
      {submitFailed && error && <Text>{error}</Text>}
    </Fragment>
  );
};

export default EmailInput;
