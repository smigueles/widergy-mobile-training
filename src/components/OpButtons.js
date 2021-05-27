import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const OpButtons = ({aOperations, styles, handleOperation}) => {
  return (
    <View style={styles.operations}>
      {aOperations.map((op, i) => (
        <TouchableOpacity key={i} onPress={() => handleOperation(op)}>
          <Text style={styles.operationButton}>{op}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default OpButtons;
