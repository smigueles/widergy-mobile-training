import React from 'react';
import {View} from 'react-native';

import Button from './Button';
import {styles} from './styles';

const NUmericButtons = ({objButtons}) => {
  return (
    <View style={styles.numbers}>
      {objButtons.numbers.map((aNumbers, i) => {
        return (
          <View key={i} style={styles.row}>
            {aNumbers.map((n, index) => (
              <Button
                key={index}
                label={n}
                style={styles.number}
                handlePress={objButtons.action}
              />
            ))}
          </View>
        );
      })}
    </View>
  );
};

export default NUmericButtons;
