import {createTypes} from 'redux-recompose';
import {api} from '../../api/swaggerApi';

export const actions = createTypes(
  [
    'REGISTER_TOKEN',
    'REGISTER_TOKEN_SUCCESS',
    'REGISTER_TOKEN_FAILURE',
    'LOGIN_TOKEN',
    'LOGIN_TOKEN_SUCCESS',
    'LOGIN_TOKEN_FAILURE',
    'LOGOUT',
    'LOGOUT_SUCCESS',
    'LOGOUT_FAILURE',
  ],
  '@USER',
);

const privateActionsCreator = {
  registerTokenSuccess: token => ({
    type: actions.REGISTER_TOKEN_SUCCESS,
    payload: token,
  }),
  registerTokenFailure: error => ({
    type: actions.REGISTER_TOKEN_FAILURE,
    payload: error,
  }),
  loginTokenSuccess: token => ({
    type: actions.REGISTER_TOKEN_SUCCESS,
    payload: token,
  }),
  loginTokenFailure: error => ({
    type: actions.REGISTER_TOKEN_FAILURE,
    payload: error,
  }),
  logOutSuccess: msg => ({
    type: actions.LOGOUT_SUCCESS,
    payload: msg,
  }),
  logOutFailure: error => ({
    type: actions.LOGOUT_FAILURE,
    payload: error,
  }),
};

const actionsCreator = {
  registerToken: (navigation, userInfo) => async dispatch => {
    dispatch({type: actions.REGISTER_TOKEN});

    const response = await api.post('/auth/create', userInfo);
    if (response.ok) {
      dispatch(privateActionsCreator.registerTokenSuccess(response.data.token));
      api.setHeader('Authorization', response.data.token);
      navigation.navigate('Home');
    } else {
      dispatch(privateActionsCreator.registerTokenFailure(response.data.error));
    }
  },
  loginToken: (navigation, userInfo) => async dispatch => {
    dispatch({type: actions.LOGIN_TOKEN});

    const response = await api.post('/auth/login', userInfo);
    if (response.ok) {
      dispatch(privateActionsCreator.loginTokenSuccess(response.data.token));
      api.setHeader('Authorization', response.data.token);
      navigation.navigate('Home');
    } else {
      dispatch(privateActionsCreator.loginTokenFailure(response.data.error));
    }
  },
  logOut: navigation => async dispatch => {
    dispatch({type: actions.LOGOUT});
    //const {token} = getState().user.token;

    const response = await api.get('/auth/logout');
    if (response.ok) {
      dispatch(privateActionsCreator.logOutSuccess(response.data.message));
      navigation.navigate('Welcome');
    } else {
      dispatch(privateActionsCreator.logOutFailure(response.data.error));
    }
  },
};

export default actionsCreator;
