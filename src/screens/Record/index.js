import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, TouchableOpacity, Text} from 'react-native';

import actionsCreator from '../../redux/actions';

import CardExpression from '../../components/CardExpression';

import {styles} from './style';

const mapStateToProps = state => {
  const {history} = state;
  return {history};
};

const Record = ({history, navigation}) => {
  const dispatch = useDispatch();

  const deleteAll = () => {
    dispatch(actionsCreator.clearRegisters());
  };

  return (
    <React.Fragment>
      <View style={styles?.navigation}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles?.btnItem}>
          <Text style={styles.itemTxt}>Back</Text>
        </TouchableOpacity>
        {history.registers.length !== 0 && (
          <TouchableOpacity onPress={deleteAll} style={styles?.btnItem}>
            <Text style={styles.itemTxt}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles?.history}>
        {history.registers.map((n, i) => (
          <CardExpression n={n} key={i} />
        ))}
      </View>
    </React.Fragment>
  );
};

export default connect(mapStateToProps)(Record);
