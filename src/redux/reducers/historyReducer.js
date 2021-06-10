import {Alert} from 'react-native';
import {api} from '../../api/swaggerApi';

const INITIAL_STATE = {
  registers: [],
};

export function historyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SAVE_EXPRESSION': {
      const {registers} = state;
      const copy = [...registers];
      copy.push({expression: action.payload.expression});
      return {...state, copy};
    }
    case 'DELETE_EXPRESSION': {
      const {registers} = state;
      const searchIndex = registers.findIndex(r => r.id === action.payload.id);
      const copy = [...registers];
      copy.splice(searchIndex, 1);

      return {...state, registers};
    }

    case 'CLEAR_REGISTER': {
      return {...state, registers: []};
    }

    case 'EDIT_EXPRESSION': {
      const {registers} = state;
      const searchIndex = registers.findIndex(r => r.id === action.payload.id);
      const copy = [...registers];
      copy[searchIndex] = {
        ...copy[searchIndex],
        expresion: action.payload.expresion,
      };
      return {...state, register: copy};
    }

    default:
      return state;
  }
}
