import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import UserForm from '../../forms/components/UserForm';

import {styles} from './style';

const mapStateToProps = state => {
  const {user} = state;
  return {user};
};

const Welcome = ({navigation, user}) => {
  return (
    <View style={styles.body}>
      <View style={styles?.welcomeBox}>
        <UserForm navigation={navigation} />
        {user.tokenLoading && <Text>Loading</Text>}
      </View>
    </View>
  );
};

export default connect(mapStateToProps)(Welcome);
