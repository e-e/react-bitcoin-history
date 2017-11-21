import { combineReducers } from 'redux';
import TransactionsReducer from './TransactionsReducer';
import BitcoinAddressReducer from './BitcoinAddressReducer';
import LoadingReducer from './LoadingReducer';
import ActiveTransactionReducer from './ActiveTransactionReducer';

const rootReducer = combineReducers({
  transactions: TransactionsReducer,
  btcAddress: BitcoinAddressReducer,
  loading: LoadingReducer,
  activeTransactionId: ActiveTransactionReducer
});

export default rootReducer;
