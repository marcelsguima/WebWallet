export const ADD_USER = 'ADD_USER';
export const BALANCE = 'BALANCE';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const balance = (payload) => ({
  type: BALANCE,
  payload,
});
