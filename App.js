/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';

import Display from './src/screens/Display';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Display />
    </Provider>
  );
};
export default App;
