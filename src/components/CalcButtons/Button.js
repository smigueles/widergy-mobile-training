import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({label, handlePress, style = {}}) => {
  return (
    <TouchableOpacity onPress={() => handlePress(label)}>
      <Text style={style}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
