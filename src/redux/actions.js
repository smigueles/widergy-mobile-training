import {createTypes} from 'redux-recompose';

export const actions = createTypes(
  ['SAVE_EXPRESSION', 'DELETE_EXPRESSION', 'CLEAR_REGISTER', 'EDIT_EXPRESSION'],
  '@HISTORY',
);

const actionsCreator = {
  saveExp: expresion => ({
    type: actions.SAVE_EXPRESSION,
    payload: expresion,
  }),
  deleteExp: id => ({
    type: actions.DELETE_EXPRESSION,
    payload: id,
  }),
  clearRegisters: () => ({
    type: actions.CLEAR_REGISTER,
  }),
  editExp: (expresion, id) => ({
    type: actions.EDIT_EXPRESSION,
    payload: {
      expresion: expresion,
      id: id,
    },
  }),
};

export default actionsCreator;
