import React, {useState, useEffect} from 'react';
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

  const {handleSubmit, reset, pristine} = props;

  const submitLogin = values => {
    dispatch(actionsCreator.loginToken(navigation, values));
  };

  const submitRegister = values => {
    dispatch(actionsCreator.registerToken(navigation, values));
  };

  const submit = changeForm ? submitLogin : submitRegister;
  const buttonTxt = changeForm ? 'Login' : 'Register';

  const handleForm = () => {
    setChangeForm(!changeForm);
    reset();
  };

  const submitButton = values => {
    submit(values);
    setTimeout(() => setChangeForm(true), 2000);
  };

  return (
    <React.Fragment>
      <Field
        name="email"
        component={EmailInput}
        label="email"
        normalize={lower}
      />
      <Field name="password" component={PassInput} label="password" />
      {!changeForm && (
        <Field
          name="confirmPassword"
          component={PassInput}
          label="confirm password"
        />
      )}
      <TouchableOpacity
        style={styles.startBtn}
        disabled={pristine}
        onPress={handleSubmit(submitButton)}>
        <Text style={styles.startTxt}>{buttonTxt}</Text>
      </TouchableOpacity>
      {changeForm ? (
        <TouchableOpacity onPress={() => handleForm()}>
          <Text style={styles.welcomeText}>
            You not already an account? Create one
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => handleForm()}>
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
