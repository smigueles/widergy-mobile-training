import {createTypes} from 'redux-recompose';

export const actions = createTypes(['REGISTER_TOKEN'], '@USER');

const actionsCreator = {
  registerToken: token => ({
    type: actions.REGISTER_TOKEN,
    payload: token,
  }),
};

export default actionsCreator;
