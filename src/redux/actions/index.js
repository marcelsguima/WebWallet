import { getFinanceTable, getFullTable } from '../../utils/requestAPI';

export const ADD_USER = 'ADD_USER';
export const BALANCE = 'BALANCE';
export const REQUEST_FINANCE = 'REQUEST_FINANCE';
export const SEND_FINANCE = 'SEND_FINANCE';
export const SEND_EXPENSE = 'SEND_EXPENSE';
export const UPDATE_TABLE = 'UPDATE_TABLE';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const balance = (payload) => ({
  type: BALANCE,
  payload,
});

export const getFinance = (payload) => ({
  type: REQUEST_FINANCE,
  payload,
});

export const sendFinance = (payload) => ({
  type: SEND_FINANCE,
  payload,
});

export const sendExpense = (payload) => ({
  type: SEND_EXPENSE,
  payload,
});

export const upTable = (data, state) => ({
  type: UPDATE_TABLE,
  payload: { ...state, exchangeRates: data },
});

export const sendFinanceTable = () => async (dispatch) => {
  const responseAPI = await getFinanceTable();
  dispatch(sendFinance(responseAPI));
};

export const updatedTable = (state) => async (dispatch) => {
  const responseAPI = await getFullTable();
  dispatch(upTable(responseAPI, state));
};
