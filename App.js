/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Display from './src/screens/Display';
import Record from './src/screens/Record';
import Welcome from './src/screens/Welcome';

import {styles} from './src/screens/Display/style';

import {store} from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#e8d5b5',
            },
            headerTitleStyle: {
              alignSelf: 'center',
            },
          }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen
            name="Home"
            options={({navigation}) => ({
              title: 'Calculator',
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('History')}
                  style={styles.navigateButton}>
                  <Text style={styles.navigateTxt}>Go to History</Text>
                </TouchableOpacity>
              ),
            })}
            component={Display}
          />
          <Stack.Screen name="History" component={Record} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
