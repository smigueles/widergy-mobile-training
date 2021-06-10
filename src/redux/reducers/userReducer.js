const INITIAL_STATE = {
  token: '',
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'REGISTER_TOKEN': {
      return {...state, token: action.payload};
    }

    default:
      return state;
  }
};
