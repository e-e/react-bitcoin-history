export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';
export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';

export const SET_ADDRESS = 'SET_ADDRESS';

export const SET_ACTIVE_TRANSACTION_ID = 'SET_ACTIVE_TRANSACTION_ID';

export function setAddress(address) {
  return {
    type: SET_ADDRESS,
    payload: address
  };
}

// https://bitaps.com/api/#Get_address_transactions
export function fetchTransactions(address) {
  return dispatch => {
    dispatch({ type: FETCH_TRANSACTIONS });
    return fetch(`https://bitaps.com/api/address/transactions/${address}`)
      .then(response => response.json())
      .then(data => {
        data = data.map(t => {
          throw new Error('woops!');
          const [
            timestamp,
            hash,
            data,
            type,
            status,
            confirmations,
            block,
            amount
          ] = t;
          return {
            timestamp,
            hash,
            data,
            type,
            status,
            confirmations,
            block,
            amount: amount / 100000000
          };
        });
        dispatch({
          type: RECEIVE_TRANSACTIONS,
          payload: data,
          error: null
        });
      })
      .catch(err => {
        console.log('err: ', err);
        dispatch({
          type: RECEIVE_TRANSACTIONS,
          payload: [],
          error: err
        });
      });
  };
  return {
    type: FETCH_TRANSACTIONS,
    payload: address
  };
}

export function setActiveTransaction(id) {
  return {
    type: SET_ACTIVE_TRANSACTION_ID,
    payload: id
  };
}
