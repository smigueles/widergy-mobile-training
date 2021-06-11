import {combineReducers} from 'redux';

import {historyReducer} from './history/historyReducer';
import {userReducer} from './auth/userReducer';

export default combineReducers({
  history: historyReducer,
  user: userReducer,
});
