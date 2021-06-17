import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {useDispatch} from 'react-redux';

import EmailInput from '../EmailInput';
import PassInput from '../PassInput';

import {USER_FORM} from '../../constants';

import actionsCreator from '../../../redux/auth/actions';
import {validate} from '../../validate';

import {styles} from './style';

const lower = value => value && value.toLowerCase();

const UserForm = ({navigation, ...props}) => {
  const [changeForm, setChangeForm] = useState(true);
  const dispatch = useDispatch();

  const {handleSubmit} = props;

  const submitLogin = values => {
    dispatch(actionsCreator.loginToken(navigation, values));
  };

  const submitRegister = values => {
    dispatch(actionsCreator.registerToken(navigation, values));
  };

  const submit = changeForm ? submitLogin : submitRegister;

  const buttonTxt = changeForm ? 'Login' : 'Register';

  return (
    <React.Fragment>
      <Field
        name="email"
        component={EmailInput}
        label="email"
        normalize={lower}
      />
      <Field name="password" component={PassInput} label="password" />
      <TouchableOpacity style={styles.startBtn} onPress={handleSubmit(submit)}>
        <Text style={styles.startTxt}>{buttonTxt}</Text>
      </TouchableOpacity>
      {changeForm ? (
        <TouchableOpacity onPress={() => setChangeForm(false)}>
          <Text style={styles.welcomeText}>
            You not already an account? Create one
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setChangeForm(true)}>
          <Text style={styles.welcomeText}>Already have an account? Login</Text>
        </TouchableOpacity>
      )}
    </React.Fragment>
  );
};

export default reduxForm({
  form: USER_FORM,
  validate,
})(UserForm);
