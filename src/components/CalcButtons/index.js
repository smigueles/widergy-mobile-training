import React from 'react';
import {View} from 'react-native';

import Button from './Button';
import {styles} from './styles';
import {getButtons} from '../../utils/calcButtons';

const CalcButton = ({buttons = []}) => {
<<<<<<< HEAD
  const numberButtons = getButtons(buttons, 'numbers');
=======
  const numericButtons = getButtons(buttons, 'numbers');
>>>>>>> navigation
  const opButtons = getButtons(buttons, 'operations');
  return (
    <View style={styles.buttons}>
      <View style={styles.numbers}>
<<<<<<< HEAD
        {numberButtons.numbers.map((aNumbers, i) => {
=======
        {numericButtons.numbers.map((aNumbers, i) => {
>>>>>>> navigation
          return (
            <View key={i} style={styles.row}>
              {aNumbers.map((n, index) => (
                <Button
                  key={index}
                  label={n}
                  style={styles.number}
<<<<<<< HEAD
                  handlePress={() => numberButtons.action(n)}
=======
                  handlePress={numericButtons.action}
>>>>>>> navigation
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
<<<<<<< HEAD
            handlePress={() => opButtons.action(op)}
=======
            handlePress={opButtons.action}
>>>>>>> navigation
          />
        ))}
      </View>
    </View>
  );
};

export default CalcButton;
