import { FETCH_TRANSACTIONS, RECEIVE_TRANSACTIONS } from '../actions';
const INITIAL_STATE = false;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return true;

    case RECEIVE_TRANSACTIONS:
      return false;

    default:
      return state;
  }
}
