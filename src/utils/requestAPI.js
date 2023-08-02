export const getFullTable = async () => {
  const requestAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await requestAPI.json();
  return json;
};

export const getFinanceTable = async () => {
  const requestAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
  const json = await requestAPI.json();
  return Object.keys(json).filter((e) => e !== 'USDT');
};

// export default getFinanceTable;
