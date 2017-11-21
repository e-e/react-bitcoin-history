import { SET_ACTIVE_TRANSACTION_ID, FETCH_TRANSACTIONS } from '../actions';
const INITIAL_STATE = null;

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ACTIVE_TRANSACTION_ID:
      if (state === action.payload) {
        return null;
      }
      return action.payload;
    case FETCH_TRANSACTIONS:
      return null;

    default:
      return state;
  }
}
