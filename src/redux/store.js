import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '../../reactotron-config';
import rootReducer from './index';

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), Reactotron.createEnhancer()),
);
