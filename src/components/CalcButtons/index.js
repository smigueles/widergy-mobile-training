import React from 'react';
import {View} from 'react-native';

import NUmericButtons from './NumericButtons';
import OpButtons from './OpButtons';
import {styles} from './styles';
import {getButtons} from '../../utils/calcButtons';

const CalcButton = ({buttons = []}) => {
  return (
    <View style={styles.buttons}>
      <NUmericButtons objButtons={getButtons(buttons, 'numbers')} />
      <OpButtons objOperations={getButtons(buttons, 'operations')} />
    </View>
  );
};

export default CalcButton;
