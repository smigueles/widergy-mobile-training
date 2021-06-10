import {combineReducers} from 'redux';

import {historyReducer} from './historyReducer';
import {userReducer} from './userReducer';

export default combineReducers({
  history: historyReducer,
  user: userReducer,
});
