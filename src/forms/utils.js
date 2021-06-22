import UserInput from './components/UserInput';
import {lower} from './normalize';

export const createFields = (
  condition,
  required,
  email,
  minChar,
  checkPass,
) => {
  return [
    {
      name: 'email',
      label: 'email',
      normalize: lower,
      component: UserInput,
      validate: [required, email],
      security: false,
      visible: true,
    },
    {
      name: 'password',
      label: 'password',
      component: UserInput,
      validate: [required, minChar],
      security: true,
      visible: true,
    },
    {
      name: 'confirmPassword',
      label: 'confirm password',
      component: UserInput,
      validate: [required, checkPass],
      security: true,
      visible: condition,
    },
  ].filter((field, i) => field.visible);
};
