/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Display from './src/screens/Display';
import Record from './src/screens/Record';

import {store} from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              title: 'Calculator',
              headerStyle: {
                backgroundColor: '#e8d5b5',
              },
            }}
            component={Display}
          />
          <Stack.Screen
            name="History"
            component={Record}
            options={{headerStyle: {backgroundColor: '#e8d5b5'}}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
