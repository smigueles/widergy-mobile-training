export const required = value => (value ? undefined : 'Required');

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const minChar = value =>
  value && value.length < 8
    ? 'Password must contain a minimum of eight characters'
    : undefined;

export const checkPass = (value, allValues) =>
  value && allValues.password !== value
    ? 'Passwords are not the same'
    : undefined;
