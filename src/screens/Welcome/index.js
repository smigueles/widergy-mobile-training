import React, {Fragment} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import UserForm from '../../forms/components/UserForm';

import {styles} from './style';

const Welcome = ({navigation, tokenLoading}) => {
  return (
    <View style={styles.body}>
      <View style={styles?.welcomeBox}>
        {tokenLoading ? (
          <Fragment>
            <Text>Loading</Text>
            <ActivityIndicator size="small" color="#0000ff" />
          </Fragment>
        ) : (
          <UserForm navigation={navigation} />
        )}
      </View>
    </View>
  );
};

const mapStateToProps = ({user}) => {
  const {tokenLoading} = user;
  return {tokenLoading};
};

export default connect(mapStateToProps)(Welcome);
