// Esse reducer será responsável por tratar as informações da pessoa usuária
import { ADD_USER } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case ADD_USER:
    return {
      ...state,
      email: payload,
    };
  default:
    return state;
  }
};

export default user;
