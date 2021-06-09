import React from 'react';
import {View} from 'react-native';

import Button from './Button';
import {styles} from './styles';
import {getButtons} from '../../utils/calcButtons';

const CalcButton = ({buttons = []}) => {
  const numberButtons = getButtons(buttons, 'numbers');
  const opButtons = getButtons(buttons, 'operations');
  return (
    <View style={styles.buttons}>
      <View style={styles.numbers}>
        {numberButtons.numbers.map((aNumbers, i) => {
          return (
            <View key={i} style={styles.row}>
              {aNumbers.map((n, index) => (
                <Button
                  key={index}
                  label={n}
                  style={styles.number}
                  handlePress={() => numberButtons.action(n)}
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
            handlePress={() => opButtons.action(op)}
          />
        ))}
      </View>
    </View>
  );
};

export default CalcButton;
