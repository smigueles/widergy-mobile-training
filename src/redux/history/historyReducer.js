import {api} from '../../api/swaggerApi';
import {actions} from './actions';

const INITIAL_STATE = {
  registers: [],
  registersLoading: false,
  registersError: null,
};
let id = 1;
export function historyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.SAVE_EXPRESSION: {
      const {registers} = state;
      const copyRegister = [...registers];
      copyRegister.push({expresion: action.payload, id: id});
      id++;

      return {...state, registers: copyRegister};
    }

    case actions.DELETE_EXPRESSION: {
      const {registers} = state;
      const searchIndex = registers.findIndex(r => r.id === action.payload);
      const copyRegister = [...registers];
      copyRegister.splice(searchIndex, 1);

      return {...state, registers: copyRegister};
    }

    case actions.CLEAR_REGISTER: {
      return {...state, registers: []};
    }

    case actions.EDIT_EXPRESSION: {
      const {registers} = state;
      const searchIndex = registers.findIndex(r => r.id === action.payload.id);
      const copyRegister = [...registers];
      copyRegister[searchIndex] = {
        ...copyRegister[searchIndex],
        expresion: action.payload.expresion,
      };
      return {...state, registers: copyRegister};
    }

    default:
      return state;
  }
}
