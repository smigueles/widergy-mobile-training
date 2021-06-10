import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, TouchableOpacity, Text} from 'react-native';

import {clearRegisters} from '../../redux/actions';

import CardExpression from '../../components/CardExpression';

import {styles} from './style';

const mapStateToProps = state => {
  const {history, user} = state;
  return {history, user};
};

const Record = ({history, user, navigation}) => {
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.navigation}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles?.btnItem}>
          <Text style={styles.itemTxt}>Back</Text>
        </TouchableOpacity>
        {history.registers.length !== 0 && (
          <TouchableOpacity
            onPress={() => dispatch(clearRegisters(user.token))}
            style={styles?.btnItem}>
            <Text style={styles.itemTxt}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles?.history}>
        {history.registers.map((n, i) => (
          <CardExpression n={n} key={i} />
        ))}
      </View>
    </>
  );
};

export default connect(mapStateToProps)(Record);
