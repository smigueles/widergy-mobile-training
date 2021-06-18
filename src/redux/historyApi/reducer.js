import {actions} from './actions';

const INITIAL_STATE = {
  getExpressionsLoading: false,
  getExpressionsError: null,
  expressions: [],
  createExpressionsMsg: null,
  createExpressionsLoading: false,
  createExpressionsError: null,
  deleteExpressionLoading: false,
  deleteExpressionError: null,
  deleteExpressionMsg: null,
  deleteAllExpressionMsg: null,
  deleteAllExpressionError: null,
  deleteAllExpressionLoading: false,
  editExpLoading: false,
  editExpMsg: null,
  editExpError: null,
};

export const historyApiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.GET_EXPRESSIONS: {
      return {...state, getExpressionsLoading: true};
    }
    case actions.GET_EXPRESSIONS_SUCCESS: {
      return {
        ...state,
        getExpressionsLoading: false,
        getExpressionsError: null,
        expressions: action.payload,
      };
    }
    case actions.GET_EXPRESSIONS_FAILURE: {
      return {
        ...state,
        getExpressionsLoading: false,
        getExpressionsError: action.payload,
      };
    }
    case actions.CREATE_EXPRESSION: {
      return {...state, createExpressionsLoading: true};
    }
    case actions.CREATE_EXPRESSION_SUCCESS: {
      return {
        ...state,
        createExpressionsLoading: false,
        createExpressionsError: null,
        createExpressionsMsg: action.payload,
      };
    }
    case actions.CREATE_EXPRESSION_FAILURE: {
      return {
        ...state,
        createExpressionsLoading: false,
        createExpressionsError: action.payload,
      };
    }
    case actions.DELETE_EXPRESSION_BY_ID: {
      return {...state, deleteExpressionLoading: true};
    }
    case actions.DELETE_EXPRESSION_BY_ID_SUCCESS: {
      return {
        ...state,
        deleteExpressionLoading: false,
        deleteExpressionError: null,
        deleteExpressionMsg: action.payload,
      };
    }
    case actions.DELETE_EXPRESSION_BY_ID_FAILURE: {
      return {
        ...state,
        deleteExpressionLoading: false,
        deleteExpressionError: action.payload,
      };
    }
    case actions.DELETE_ALL_EXPRESSIONS: {
      return {...state, deleteAllExpressionLoading: true};
    }
    case actions.DELETE_ALL_EXPRESSIONS_SUCCESS: {
      return {
        ...state,
        deleteAllExpressionLoading: false,
        deleteAllExpressionError: null,
        deleteAllExpressionMsg: action.payload,
      };
    }
    case actions.DELETE_ALL_EXPRESSIONS_FAILURE: {
      return {
        ...state,
        deleteAllExpressionLoading: false,
        deleteAllExpressionError: action.payload,
      };
    }
    case actions.EDIT_EXPRESSION: {
      return {...state, editExpLoading: true};
    }
    case actions.EDIT_EXPRESSION_SUCCESS: {
      return {
        ...state,
        editExpLoading: false,
        editExpError: null,
        editExpMsg: action.payload,
      };
    }
    case actions.EDIT_EXPRESSION_FAILURE: {
      return {
        ...state,
        editExpLoading: false,
        editExpError: action.payload,
      };
    }
    default:
      return state;
  }
};
