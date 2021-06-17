import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
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
        {user.tokenLoading && (
          <React.Fragment>
            <Text>Loading</Text>
            <ActivityIndicator size="small" color="#0000ff" />
          </React.Fragment>
        )}
      </View>
    </View>
  );
};

export default connect(mapStateToProps)(Welcome);
