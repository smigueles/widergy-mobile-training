import EmailInput from './components/EmailInput';
import PassInput from './components/PassInput';

export const createFields = (
  condition,
  required,
  email,
  minChar,
  checkPass,
) => {
  const lower = value => value && value.toLowerCase();
  return condition
    ? [
        {
          name: 'email',
          label: 'email',
          normalize: lower,
          component: EmailInput,
          validate: [required, email],
        },
        {
          name: 'password',
          label: 'password',
          component: PassInput,
          validate: [required, minChar],
        },
      ]
    : [
        {
          name: 'email',
          label: 'email',
          normalize: lower,
          component: EmailInput,
          validate: [required, email],
        },
        {
          name: 'password',
          label: 'password',
          component: PassInput,
          validate: [required, minChar],
        },
        {
          name: 'confirmPassword',
          label: 'confirm password',
          component: PassInput,
          validate: [required, checkPass],
        },
      ];
};
