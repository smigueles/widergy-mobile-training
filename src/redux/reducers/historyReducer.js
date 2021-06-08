const INITIAL_STATE = {
  registers: [],
};
let id = 0;
export const historyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_EXPRESSION': {
      const {registers} = state;
      registers.push({expresion: action.payload, id: id});
      id++;

      return {...state, registers};
    }

    case 'DELETE_EXPRESSION': {
      const {registers} = state;
      const searchIndex = registers.findIndex(r => r.id === action.payload);
      registers.splice(searchIndex, 1);

      return {...state, registers};
    }

    case 'CLEAR_REGISTER': {
      return {...state, registers: []};
    }

    case 'EDIT_EXPRESSION': {
      const {registers} = state;
      const searchIndex = registers.findIndex(r => r.id === action.payload.id);
      registers[searchIndex] = {
        ...registers[searchIndex],
        expresion: action.payload.expresion,
      };
      return {...state, registers};
    }

    default:
      return state;
  }
};
