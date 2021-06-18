import {
  SAVE_EXPRESSION,
  DELETE_EXPRESSION,
  CLEAR_REGISTER,
  EDIT_EXPRESSION,
} from './actionTypes';

export const saveExp = expresion => ({
  type: SAVE_EXPRESSION,
  payload: expresion,
});

export const deleteExp = id => ({
  type: DELETE_EXPRESSION,
  payload: id,
});

export const clearRegisters = () => ({
  type: CLEAR_REGISTER,
});

export const editExp = (expresion, id) => ({
  type: EDIT_EXPRESSION,
  payload: {
    expresion: expresion,
    id: id,
  },
});
