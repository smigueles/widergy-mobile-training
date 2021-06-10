import {Alert} from 'react-native';
import {api} from '../../api/swaggerApi';

const INITIAL_STATE = {
  registers: [],
};

export function historyReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'FULL_STATE': {
      return {...state, registers: action.payload};
    }
    case 'SAVE_EXPRESSION': {
      const {registers} = state;
      registers.push({expression: action.payload.expression});
      const expressions = registers.map(r => r.expression);
      api
        .post(
          '/calc/expressions',
          {expressions: expressions},
          {headers: {Authorization: action.payload.token}},
        )
        .then(res => {
          return res.data;
        })
        .then(msg => Alert.alert(msg.message));
      return {...state, registers};
    }
    case 'DELETE_EXPRESSION': {
      const {registers} = state;
      const searchIndex = registers.findIndex(r => r.id === action.payload.id);
      const expressions = [registers[searchIndex].id];
      console.log(expressions);
      api
        .delete(
          '/calc/expressions',
          {expressions: expressions},
          {headers: {Authorization: action.payload.token}},
        )
        .then(r => {
          return r.data;
        })
        .then(data => Alert.alert(data.message));
      registers.splice(searchIndex, 1);

      return {...state, registers};
    }

    case 'CLEAR_REGISTER': {
      const {registers} = state;
      const expressions = registers.map(r => r.id);
      console.log(expressions, 'exp');
      api
        .delete(
          '/calc/expressions',
          {expressions: [...expressions]},
          {headers: {Authorization: action.payload}},
        )
        .then(r => {
          console.log(r.data);
          return r.data;
        })
        .then(data => Alert.alert(data.error));
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
}
