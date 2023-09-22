import React, {useState, Fragment} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {useDispatch} from 'react-redux';

import {createFields} from '../../utils';
import {USER_FORM} from '../../constants';

import actionsCreator from '../../../redux/auth/actions';
import {required, email, minChar, checkPass} from '../../validate';

import {styles} from './style';

const UserForm = ({navigation, handleSubmit, reset, submitFailed, invalid}) => {
  const [changeForm, setChangeForm] = useState(false);
  const dispatch = useDispatch();

  const submitLogin = values => {
    dispatch(actionsCreator.loginToken(navigation, values));
  };

  const submitRegister = values => {
    dispatch(actionsCreator.registerToken(navigation, values));
  };

  const submit = changeForm ? submitRegister : submitLogin;
  const buttonTxt = changeForm ? 'Register' : 'Login';

  const handleForm = () => {
    setChangeForm(prevState => !prevState);
    reset();
  };

  const textForm = changeForm
    ? 'You not already an account? Create one'
    : 'Already have an account? Login';

  const fields = createFields(changeForm, required, email, minChar, checkPass);

  return (
    <Fragment>
      {fields.map((field, i) => {
        return (
          <Field
            key={i}
            name={field.name}
            component={field.component}
            label={field.label}
            validate={field.validate}
            normalize={field?.normalize}
            secure={field.security}
          />
        );
      })}
      <TouchableOpacity
        disabled={submitFailed && invalid}
        style={styles.startBtn}
        onPress={handleSubmit(submit)}>
        <Text style={styles.startTxt}>{buttonTxt}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleForm()}>
        <Text style={styles.welcomeText}>{textForm}</Text>
      </TouchableOpacity>
    </Fragment>
  );
};

export default reduxForm({
  form: USER_FORM,
})(UserForm);
