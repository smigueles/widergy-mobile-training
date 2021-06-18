import {actions} from './actions';

const INITIAL_STATE = {
  registers: [],
  registersLoading: false,
  registersError: null,
};

export const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SAVE_EXPRESSION: {
      const {registers} = state;
      const copyRegister = [...registers];
      copyRegister.push({expresion: action.payload, id: Math.random() * 100});

      return {...state, registers: copyRegister};
    }

    case actions.DELETE_EXPRESSION: {
      const {registers} = state;
      const filterRegisters = registers.filter(r => r.id !== action.payload);
      return {...state, registers: filterRegisters};
    }

    case actions.CLEAR_REGISTER: {
      return {...state, registers: INITIAL_STATE.registers};
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
};
