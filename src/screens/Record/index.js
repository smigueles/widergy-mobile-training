import React from 'react';
import {connect} from 'react-redux';
import {View, TouchableOpacity, Text} from 'react-native';

import {clearRegisters} from '../../redux/actions';

import CardExpression from '../../components/CardExpression';

import {styles} from './style';

const mapStateToProps = state => {
  const {history} = state;
  return {history};
};

const Record = ({history, navigation, clearRegisters}) => {
  return (
    <>
      <View style={styles?.navigation}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles?.btnItem}>
          <Text style={styles.itemTxt}>Back</Text>
        </TouchableOpacity>
        {history.registers.length !== 0 && (
          <TouchableOpacity
            onPress={() => clearRegisters()}
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

export default connect(mapStateToProps, {clearRegisters})(Record);
