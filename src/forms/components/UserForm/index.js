import React, {useState, Fragment, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import {compose} from 'recompose';

import {createFields} from '../../utils';
import {USER_FORM} from '../../constants';

import actionsCreator from '../../../redux/auth/actions';
import {required, email, minChar, checkPass} from '../../validate';

import {styles} from './style';

const UserForm = ({navigation, handleSubmit, reset, submitting, tokenMsg}) => {
  const [changeForm, setChangeForm] = useState(true);
  const dispatch = useDispatch();

  const submitLogin = values => {
    dispatch(actionsCreator.loginToken(navigation, values));
  };

  const submitRegister = values => {
    dispatch(actionsCreator.registerToken(navigation, values));
  };

  const submit = changeForm ? submitLogin : submitRegister;
  const buttonTxt = changeForm ? 'Login' : 'Register';

  const handleForm = () => {
    setChangeForm(prevState => !prevState);
    reset();
  };

  const submitButton = values => {
    submit(values);
    if (tokenMsg === null) setChangeForm(true);
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
            secure={true}
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

const mapStateToProps = ({user}) => {
  const {tokenMsg} = user;
  return {tokenMsg};
};

const enhance = compose(
  connect(mapStateToProps),
  reduxForm({
    form: USER_FORM,
  }),
);

export default enhance(UserForm);
