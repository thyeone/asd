export const validateName = (name: string): boolean => {
  if (name.length < 3) return false;

  return true;
};

export const validatePw = (pw: string): boolean => {
  if (pw.length < 6) return false;

  return true;
};
