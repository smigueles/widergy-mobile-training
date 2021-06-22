import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import authAction from '../../redux/auth/actions';

import Display from '../../screens/Display';
import Record from '../../screens/Record';
import Welcome from '../../screens/Welcome';

import {styles} from './style';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();
  const logOut = navigation => {
    dispatch(authAction.logOut(navigation));
  };
  return (
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
            headerRight: () => (
              <TouchableOpacity
                style={styles.navigateButton}
                onPress={() => logOut(navigation)}>
                <Text style={styles.navigateTxt}>Logout</Text>
              </TouchableOpacity>
            ),
          })}
          component={Display}
        />
        <Stack.Screen
          name="History"
          options={({navigation}) => ({
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles?.navigateButton}>
                <Text style={styles.navigateTxt}>Back</Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={styles.navigateButton}
                onPress={() => logOut(navigation)}>
                <Text style={styles.navigateTxt}>Logout</Text>
              </TouchableOpacity>
            ),
          })}
          component={Record}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
