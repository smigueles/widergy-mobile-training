import UserInput from './components/UserInput';

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
          component: UserInput,
          validate: [required, email],
        },
        {
          name: 'password',
          label: 'password',
          component: UserInput,
          validate: [required, minChar],
        },
      ]
    : [
        {
          name: 'email',
          label: 'email',
          normalize: lower,
          component: UserInput,
          validate: [required, email],
        },
        {
          name: 'password',
          label: 'password',
          component: UserInput,
          validate: [required, minChar],
        },
        {
          name: 'confirmPassword',
          label: 'confirm password',
          component: UserInput,
          validate: [required, checkPass],
        },
      ];
};
