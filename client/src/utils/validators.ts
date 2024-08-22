export const isEmail = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const isEmpty = (value: string): boolean => {
  return value.trim() === "";
};
