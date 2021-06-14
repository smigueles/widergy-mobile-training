import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, TouchableOpacity, Text} from 'react-native';

import CardExpression from '../../components/CardExpression';
import historyAction from '../../redux/historyApi/actions';

import {styles} from './style';

const mapStateToProps = state => {
  const {history, user, historyApi} = state;
  return {history, user, historyApi};
};

const Record = ({historyApi, navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(historyAction.getExpressions());
  }, [historyApi.idMsg]);

  return (
    <>
      <View style={styles.navigation}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles?.btnItem}>
          <Text style={styles.itemTxt}>Back</Text>
        </TouchableOpacity>
        {historyApi.expressions !== undefined &&
          historyApi.expressions.length !== 0 && (
            <TouchableOpacity
              onPress={() =>
                dispatch(
                  historyAction.deleteAllExpressions(
                    historyApi.expressions.map(e => e.id),
                  ),
                )
              }
              style={styles?.btnItem}>
              <Text style={styles.itemTxt}>Clear</Text>
            </TouchableOpacity>
          )}
      </View>
      {historyApi.getExpressionsLoading !== false ? (
        <Text>Loading</Text>
      ) : (
        <View style={styles?.history}>
          {historyApi.expressions !== undefined &&
            historyApi.expressions.map((n, i) => (
              <CardExpression n={n} key={i} navigation={navigation} />
            ))}
        </View>
      )}
    </>
  );
};

export default connect(mapStateToProps)(Record);
