// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { BALANCE, DELETE_EXP, SEND_FINANCE, UPDATE_TABLE } from '../actions/index';

const INITIAL_STATE = {
  balance: 0,
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case BALANCE:
    return {
      ...state,
      balance: payload,
    };
  case SEND_FINANCE:
    return {
      ...state,
      currencies: payload,
    };
  case UPDATE_TABLE:
    return {
      ...state,
      expenses: [...state.expenses, payload],
    };
  case DELETE_EXP:
    return {
      ...state,
      expenses: state.expenses.filter((e) => e.id !== payload),
    };

  default:
    return state;
  }
};

export default wallet;
