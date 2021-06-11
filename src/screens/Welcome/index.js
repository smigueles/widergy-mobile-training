import React, {useState} from 'react';

import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {useDispatch, connect} from 'react-redux';

import actionsCreator from '../../redux/auth/actions';

import {styles} from './style';

const mapStateToProps = store => {
  const {user} = store;
  return {user};
};

const Welcome = ({navigation, user}) => {
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
    <View>
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
          <Button
            title="Login"
            onPress={() =>
              dispatch(actionsCreator.loginToken(navigation, userInfo))
            }
          />
          <TouchableOpacity onPress={() => handleRenderForms()}>
            <Text style={styles?.welcomeText}>
              You not already an account? Create one
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TextInput onChangeText={handleInputName} style={styles.input} />
          <TextInput onChangeText={handleInputPass} style={styles.input} />
          <Button
            title="Register"
            onPress={() =>
              dispatch(actionsCreator.registerToken(navigation, userInfo))
            }
          />
          <TouchableOpacity onPress={() => handleRenderForms()}>
            <Text style={styles?.welcomeText}>
              Already have an account? Login
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default connect(mapStateToProps)(Welcome);
