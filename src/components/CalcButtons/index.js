import React from 'react';
import {View} from 'react-native';

import Button from './Button';
import {styles} from './styles';
import {getButtons} from '../../utils/calcButtons';

const CalcButton = ({buttons = []}) => {
  const numericButtons = getButtons(buttons, 'numbers');
  const opButtons = getButtons(buttons, 'operations');
  return (
    <View style={styles.buttons}>
      <View style={styles.numbers}>
        {numericButtons.numbers.map((aNumbers, i) => {
          return (
            <View key={i} style={styles.row}>
              {aNumbers.map((n, index) => (
                <Button
                  key={index}
                  label={n}
                  style={styles.number}
                  handlePress={numericButtons.action}
                />
              ))}
            </View>
          );
        })}
      </View>
      <View style={styles.operations}>
        {opButtons.operations.map((op, i) => (
          <Button
            key={i}
            label={op}
            style={styles.operationButton}
            handlePress={opButtons.action}
          />
        ))}
      </View>
    </View>
  );
};

export default CalcButton;
