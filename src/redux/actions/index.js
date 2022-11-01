import getFinanceTable from '../../utils/requestAPI';

export const ADD_USER = 'ADD_USER';
export const BALANCE = 'BALANCE';
export const REQUEST_FINANCE = 'REQUEST_FINANCE';
export const SEND_FINANCE = 'SEND_FINANCE';

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

export const sendFinanceTable = () => async (dispatch) => {
  const responseAPI = await getFinanceTable();
  dispatch(sendFinance(responseAPI));
};
