import {actions} from './actions';

const INITIAL_STATE = {
  token: '',
  tokenLoading: false,
  tokenError: null,
  tokenMsg: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.REGISTER_TOKEN: {
      return {...state, tokenLoading: true};
    }
    case actions.REGISTER_TOKEN_SUCCESS: {
      return {
        ...state,
        tokenLoading: false,
        tokenError: null,
        token: action.payload,
      };
    }
    case actions.REGISTER_TOKEN_FAILURE: {
      return {
        ...state,
        tokenLoading: false,
        tokenError: action.payload,
      };
    }
    case actions.LOGIN_TOKEN: {
      return {...state, tokenLoading: true};
    }
    case actions.LOGIN_TOKEN_SUCCESS: {
      return {
        ...state,
        tokenLoading: false,
        tokenError: null,
        token: action.payload,
      };
    }
    case actions.LOGIN_TOKEN_FAILURE: {
      return {
        ...state,
        tokenLoading: false,
        tokenError: action.payload,
      };
    }
    case actions.LOGOUT: {
      return {...state, tokenLoading: true};
    }
    case actions.LOGOUT_SUCCESS: {
      return {
        ...state,
        tokenLoading: false,
        tokenError: null,
        token: '',
        tokenMsg: action.payload,
      };
    }
    case actions.LOGOUT_FAILURE: {
      return {
        ...state,
        tokenLoading: false,
        tokenError: action.payload,
      };
    }

    default:
      return state;
  }
};
