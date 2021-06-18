import React, {useEffect, Fragment} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import CardExpression from '../../components/CardExpression';
import historyAction from '../../redux/historyApi/actions';

import {styles} from './style';

const Record = ({expressions, getExpressionsLoading, tokenLoading}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(historyAction.getExpressions());
  }, [dispatch]);

  const deleteAll = () => {
    dispatch(historyAction.deleteAllExpressions(expressions.map(e => e.id)));
  };

  const condition = expressions !== undefined && expressions.length !== 0;

  return (
    <Fragment>
      {tokenLoading ? (
        <Fragment>
          <Text>Loading</Text>
          <ActivityIndicator size="small" color="#0000ff" />
        </Fragment>
      ) : (
        <Fragment>
          <View style={styles.navigation}>
            <TouchableOpacity
              onPress={deleteAll}
              disabled={!condition}
              style={styles?.btnItem}>
              <Text style={styles.itemTxt}>Clear</Text>
            </TouchableOpacity>
          </View>
          {getExpressionsLoading !== false ? (
            <Fragment>
              <Text>Loading</Text>
              <ActivityIndicator size="small" color="#0000ff" />
            </Fragment>
          ) : (
            <View style={styles?.history}>
              {expressions !== undefined &&
                expressions.map((exp, i) => (
                  <CardExpression expression={exp} key={i} />
                ))}
            </View>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({user, historyApi}) => {
  const {tokenLoading} = user;
  const {expressions, getExpressionsLoading} = historyApi;
  return {tokenLoading, expressions, getExpressionsLoading};
};

export default connect(mapStateToProps)(Record);
