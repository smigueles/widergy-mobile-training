import {combineReducers} from 'redux';

import {historyReducer} from './history/historyReducer';
import {userReducer} from './auth/userReducer';
import {historyApiReducer} from './historyApi/reducer';

export default combineReducers({
  history: historyReducer,
  user: userReducer,
  historyApi: historyApiReducer,
});
