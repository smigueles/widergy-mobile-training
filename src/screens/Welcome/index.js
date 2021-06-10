import React, {useState} from 'react';

import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect, useDispatch} from 'react-redux';

import {api} from '../../api/swaggerApi';
import {registerToken} from '../../redux/actions';

import {styles} from './style';

const Welcome = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [showRegister, setShowRegister] = useState(true);
  const dispatch = useDispatch();

  async function handleApiLogin() {
    try {
      const res = await api.post('/auth/login', userInfo);
      const data = res.data;
      if (data.token !== undefined) {
        setUserName('');
        setUserPass('');
        dispatch(registerToken(data.token));
        navigation.navigate('Home');
        return;
      }
      throw new Error(data.error);
    } catch (err) {
      Alert.alert(err.message);
      return;
    }
  }

  async function handleApiRegister() {
    try {
      const res = await api.post('/auth/create', userInfo);
      const data = res.data;
      if (data.token !== undefined) {
        setUserName('');
        setUserPass('');
        dispatch(registerToken(data.token));
        navigation.navigate('Home');
        return;
      }
      throw new Error(data.error);
    } catch (err) {
      Alert.alert(err.message);
    }
  }

  const userInfo = {
    email: userName,
    password: userPass,
  };

  const handleInputName = txt => {
    setUserName(txt);
  };

  const handleInputPass = txt => {
    setUserPass(txt);
  };

  const handleRenderForms = () => {
    setUserName('');
    setUserPass('');
    setShowRegister(!showRegister);
  };

  return (
    <View>
      <Text>Welcome</Text>
      {showRegister === true ? (
        <>
          <TextInput
            onChangeText={handleInputName}
            style={styles.input}
            value={userName}
          />
          <TextInput
            onChangeText={handleInputPass}
            style={styles.input}
            value={userPass}
          />
          <Button title="Login" onPress={() => handleApiLogin()} />
          <TouchableOpacity onPress={() => handleRenderForms()}>
            <Text>You not already an account? Create one</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput onChangeText={handleInputName} style={styles.input} />
          <TextInput onChangeText={handleInputPass} style={styles.input} />
          <Button title="Register" onPress={() => handleApiRegister()} />
          <TouchableOpacity onPress={() => handleRenderForms()}>
            <Text>Already have an account? Login</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Welcome;
