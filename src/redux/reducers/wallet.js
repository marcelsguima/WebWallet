// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { BALANCE } from '../actions/index';

const INITIAL_STATE = {
  balance: 0,
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case BALANCE:
    return {
      ...state,
      balance: payload,
    };
  default:
    return state;
  }
};

export default wallet;
