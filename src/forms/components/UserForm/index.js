import React, {useState, Fragment} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {useDispatch} from 'react-redux';

import {createFields} from '../../utils';
import {USER_FORM} from '../../constants';

import actionsCreator from '../../../redux/auth/actions';
import {required, email, minChar, checkPass} from '../../validate';

import {styles} from './style';

const UserForm = ({navigation, ...props}) => {
  const [changeForm, setChangeForm] = useState(true);
  const dispatch = useDispatch();

  const {handleSubmit, reset, submitting} = props;

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

  const textForm = changeForm
    ? 'You not already an account? Create one'
    : 'Already have an account? Login';

  const fields = createFields(changeForm, required, email, minChar, checkPass);

  return (
    <Fragment>
      {fields.map((field, i) => {
        if (field.normalize) {
          return (
            <Field
              key={i}
              name={field.name}
              component={field.component}
              label={field.label}
              normalize={field.normalize}
              validate={field.validate}
            />
          );
        }
        return (
          <Field
            key={i}
            name={field.name}
            component={field.component}
            label={field.label}
            validate={field.validate}
          />
        );
      })}
      <TouchableOpacity
        disabled={submitting}
        style={styles.startBtn}
        onPress={handleSubmit(submitButton)}>
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
