import React, {useState} from 'react';

import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {useDispatch, connect} from 'react-redux';

import actionsCreator from '../../redux/auth/actions';

import {styles} from './style';

const mapStateToProps = store => {
  const {user} = store;
  return {user};
};

const Welcome = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [showRegister, setShowRegister] = useState(true);
  const dispatch = useDispatch();

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
    <View style={styles.body}>
      <View style={styles?.welcomeBox}>
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
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.startBtn}
              onPress={() =>
                dispatch(actionsCreator.loginToken(navigation, userInfo))
              }>
              <Text style={styles.startTxt}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRenderForms()}>
              <Text style={styles.welcomeText}>
                You not already an account? Create one
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TextInput onChangeText={handleInputName} style={styles.input} />
            <TextInput
              onChangeText={handleInputPass}
              style={styles.input}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={styles.startBtn}
              onPress={() =>
                dispatch(actionsCreator.registerToken(navigation, userInfo))
              }>
              <Text style={styles.startTxt}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRenderForms()}>
              <Text style={styles.welcomeText}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

export default connect(mapStateToProps)(Welcome);
