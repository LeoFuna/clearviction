/* eslint-disable no-useless-escape */
export const validateEmail = (email: string) =>
  email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
