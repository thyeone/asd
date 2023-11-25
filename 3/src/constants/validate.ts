export const validate = Object.freeze({
  nameLength: 'Name must be at least 3 charaters long.',
  duplicateCheck: (value: string) => `The name ${value} is duplicated.`,
  password: 'Password must be at least 6 charaters long.',
});
