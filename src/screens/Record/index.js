import React from 'react';
<<<<<<< HEAD
import {connect, useDispatch} from 'react-redux';
=======
import {connect} from 'react-redux';
>>>>>>> 12d16d7ce42a881e36694ed36e4b1dd6fe273482
import {View, TouchableOpacity, Text} from 'react-native';

import {clearRegisters} from '../../redux/actions';

import CardExpression from '../../components/CardExpression';

import {styles} from './style';

const mapStateToProps = state => {
  const {history} = state;
  return {history};
};

<<<<<<< HEAD
const Record = ({history, navigation}) => {
  const dispatch = useDispatch();
=======
const Record = ({history, navigation, clearRegisters}) => {
>>>>>>> 12d16d7ce42a881e36694ed36e4b1dd6fe273482
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
<<<<<<< HEAD
            onPress={() => dispatch(clearRegisters())}
=======
            onPress={() => clearRegisters()}
>>>>>>> 12d16d7ce42a881e36694ed36e4b1dd6fe273482
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

<<<<<<< HEAD
export default connect(mapStateToProps)(Record);
=======
export default connect(mapStateToProps, {clearRegisters})(Record);
>>>>>>> 12d16d7ce42a881e36694ed36e4b1dd6fe273482
