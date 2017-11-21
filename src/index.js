import React from 'react';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

import './styles.css';

import BitcoinHistoryOuter from './components/BitcoinHistoryOuter';

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

class BitcoinHistory extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BitcoinHistoryOuter {...this.props} />
      </Provider>
    );
  }
}

export default BitcoinHistory;
