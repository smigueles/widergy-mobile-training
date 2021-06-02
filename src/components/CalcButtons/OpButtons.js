import React from 'react';
import {View} from 'react-native';

import Button from './Button';
import {styles} from './styles';

const OpButtons = ({objOperations}) => {
  return (
    <View style={styles.operations}>
      {objOperations.operations.map((op, i) => (
        <Button
          key={i}
          label={op}
          style={styles.operationButton}
          handlePress={objOperations.action}
        />
      ))}
    </View>
  );
};

export default OpButtons;
