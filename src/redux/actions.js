import {
  SAVE_EXPRESSION,
  DELETE_EXPRESSION,
  CLEAR_REGISTER,
  EDIT_EXPRESSION,
  REGISTER_TOKEN,
  FULL_STATE,
} from './actionTypes';

export const saveExp = (expression, token) => ({
  type: SAVE_EXPRESSION,
  payload: {expression: expression, token: token},
});

export const deleteExp = (id, token) => ({
  type: DELETE_EXPRESSION,
  payload: {
    id: id,
    token: token,
  },
});

export const clearRegisters = token => ({
  type: CLEAR_REGISTER,
  payload: token,
});

export const editExp = (expresion, id) => ({
  type: EDIT_EXPRESSION,
  payload: {
    expresion: expresion,
    id: id,
  },
});

export const registerToken = token => ({
  type: REGISTER_TOKEN,
  payload: token,
});

export const fullState = array => ({
  type: FULL_STATE,
  payload: array,
});
