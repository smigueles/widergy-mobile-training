import React from 'react';
import {View} from 'react-native';

import UserForm from '../../forms/components/UserForm';

import {styles} from './style';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.body}>
      <View style={styles?.welcomeBox}>
        <UserForm navigation={navigation} />
      </View>
    </View>
  );
};

export default Welcome;
