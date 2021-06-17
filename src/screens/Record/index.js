import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import CardExpression from '../../components/CardExpression';
import historyAction from '../../redux/historyApi/actions';

import {styles} from './style';

const mapStateToProps = state => {
  const {history, user, historyApi} = state;
  return {history, user, historyApi};
};

const Record = ({historyApi, user}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(historyAction.getExpressions());
  }, [dispatch]);

  const deleteAll = () => {
    dispatch(
      historyAction.deleteAllExpressions(historyApi.expressions.map(e => e.id)),
    );
  };

  const condition =
    historyApi.expressions !== undefined && historyApi.expressions.length !== 0;

  return (
    <React.Fragment>
      <View style={styles.navigation}>
        <TouchableOpacity
          onPress={deleteAll}
          disabled={!condition}
          style={styles?.btnItem}>
          <Text style={styles.itemTxt}>Clear</Text>
        </TouchableOpacity>
      </View>
      {user.tokenLoading && (
        <React.Fragment>
          <Text>Loading</Text>
          <ActivityIndicator size="small" color="#0000ff" />
        </React.Fragment>
      )}
      {historyApi.getExpressionsLoading !== false ? (
        <React.Fragment>
          <Text>Loading</Text>
          <ActivityIndicator size="small" color="#0000ff" />
        </React.Fragment>
      ) : (
        <View style={styles?.history}>
          {historyApi.expressions !== undefined &&
            historyApi.expressions.map((exp, i) => (
              <CardExpression expression={exp} key={i} />
            ))}
        </View>
      )}
    </React.Fragment>
  );
};

export default connect(mapStateToProps)(Record);
