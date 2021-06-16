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
  }, []);

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
      {historyApi.getExpressionsLoading !== false ? (
        <Text>Loading</Text>
      ) : (
        <View style={styles?.history}>
          {historyApi.expressions !== undefined &&
            historyApi.expressions.map((exp, i) => (
              <CardExpression
                expression={exp}
                key={i}
                navigation={navigation}
              />
            ))}
        </View>
      )}
    </React.Fragment>
  );
};

export default connect(mapStateToProps)(Record);
