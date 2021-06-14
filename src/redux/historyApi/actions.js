import {Alert} from 'react-native';
import {createTypes} from 'redux-recompose';
import {api} from '../../api/api';

export const actions = createTypes(
  [
    'GET_EXPRESSIONS',
    'GET_EXPRESSIONS_SUCCESS',
    'GET_EXPRESSIONS_FAILURE',
    'CREATE_EXPRESSION',
    'CREATE_EXPRESSION_SUCCESS',
    'CREATE_EXPRESSION_FAILURE',
    'DELETE_EXPRESSION_BY_ID',
    'DELETE_EXPRESSION_BY_ID_SUCCESS',
    'DELETE_EXPRESSION_BY_ID_FAILURE',
    'DELETE_ALL_EXPRESSIONS',
    'DELETE_ALL_EXPRESSIONS_SUCCESS',
    'DELETE_ALL_EXPRESSIONS_FAILURE',
    'EDIT_EXPRESSION',
    'EDIT_EXPRESSION_SUCCESS',
    'EDIT_EXPRESSION_FAILURE',
  ],
  '@EXPRESSIONS',
);

const privateActionsCreator = {
  getExpressionsSuccess: expressions => ({
    type: actions.GET_EXPRESSIONS_SUCCESS,
    payload: expressions,
  }),
  getExpressionsFailure: error => ({
    type: actions.GET_EXPRESSIONS_FAILURE,
    payload: error,
  }),
  createExpressionsSuccess: msg => ({
    type: actions.CREATE_EXPRESSION_SUCCESS,
    payload: msg,
  }),
  createExpressionsFailure: error => ({
    type: actions.CREATE_EXPRESSION_FAILURE,
    payload: error,
  }),
  deleteExpressionByIdSuccess: msg => ({
    type: actions.DELETE_EXPRESSION_BY_ID_SUCCESS,
    payload: msg,
  }),
  deleteExpressionByIdFailure: error => ({
    type: actions.DELETE_EXPRESSION_BY_ID_FAILURE,
    payload: error,
  }),
  deleteAllExpressionsSuccess: msg => ({
    type: actions.DELETE_ALL_EXPRESSIONS_SUCCESS,
    payload: msg,
  }),
  deleteAllExpressionsFailure: error => ({
    type: actions.DELETE_ALL_EXPRESSIONS_FAILURE,
    payload: error,
  }),
  editExpressionSuccess: msg => ({
    type: actions.EDIT_EXPRESSION_SUCCESS,
    payload: msg,
  }),
  editExpressionFailure: error => ({
    type: actions.EDIT_EXPRESSION_FAILURE,
    payload: error,
  }),
};

const actionsCreator = {
  getExpressions: () => async dispatch => {
    dispatch({type: actions.GET_EXPRESSIONS});
    const response = await api.get('/calc/expressions');
    if (response.ok) {
      dispatch(privateActionsCreator.getExpressionsSuccess(response.data.data));
    } else {
      dispatch(
        privateActionsCreator.getExpressionsFailure(response.data.error),
        Alert.alert('Upps', response.data.error),
      );
    }
  },
  createExpression: expression => async dispatch => {
    dispatch({type: actions.CREATE_EXPRESSION});
    const response = await api.post('/calc/expressions', {
      expressions: expression,
    });
    if (response.ok) {
      dispatch(
        privateActionsCreator.createExpressionsSuccess(response.data.message),
      );
      Alert.alert('Good', response.data.message);
    } else {
      dispatch(
        privateActionsCreator.createExpressionsFailure(response.data.error),
        Alert.alert('Upps', response.data.error),
      );
    }
  },
  deleteExpresionById: id => async dispatch => {
    dispatch({type: actions.DELETE_EXPRESSION_BY_ID});

    const response = await api.delete(
      '/calc/expressions',
      {},
      {data: {expressions: [id]}},
    );
    if (response.ok) {
      dispatch(
        privateActionsCreator.deleteExpressionByIdSuccess(
          response.data.message,
        ),
      );
    } else {
      dispatch(
        privateActionsCreator.deleteExpressionByIdFailure(response.data.error),
        Alert.alert('Not so far!', response.data.error),
      );
    }
  },
  deleteAllExpressions: ids => async dispatch => {
    dispatch({type: actions.DELETE_ALL_EXPRESSIONS});

    const response = await api.delete(
      '/calc/expressions',
      {},
      {data: {expressions: ids}},
    );
    if (response.ok) {
      dispatch(
        privateActionsCreator.deleteAllExpressionsSuccess(
          response.data.message,
        ),
      );
    } else {
      dispatch(
        privateActionsCreator.deleteAllExpressionsFailure(response.problem),
        Alert.alert("I don't think so!", response.data.error),
      );
    }
  },
  editExpressions: (id, exp, navigation) => async dispatch => {
    dispatch({type: actions.EDIT_EXPRESSION});

    const response = await api.put(`/calc/expressions/${id}`, {
      expression: exp,
    });

    if (response.ok) {
      dispatch(
        privateActionsCreator.editExpressionSuccess(response.data.message),
      );
    } else {
      dispatch(
        privateActionsCreator.editExpressionFailure(response.data.error),
      );
    }
  },
};

export default actionsCreator;
