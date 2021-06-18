import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import {historyReducer} from './history/historyReducer';
import {userReducer} from './auth/userReducer';
import {historyApiReducer} from './historyApi/reducer';

export default combineReducers({
  history: historyReducer,
  user: userReducer,
  historyApi: historyApiReducer,
  form: formReducer,
});
