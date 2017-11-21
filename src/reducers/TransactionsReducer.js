import { RECEIVE_TRANSACTIONS } from '../actions';
const INITIAL_STATE = {
  data: [],
  error: null
};
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_TRANSACTIONS:
      return { data: [...action.payload], error: action.error };

    default:
      return state;
  }
}
