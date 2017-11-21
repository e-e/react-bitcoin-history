import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setActiveTransaction } from '../actions';

import TransactionListItem from './TransactionListItem';

class TransasctionsList extends Component {
  renderError() {
    console.log('ERROR: ', this.props.transactions.error.message);
    return (
      <div className="btc-history-error">
        There was a problem loading the transaction history
      </div>
    );
  }
  renderItems() {
    if (this.props.loading) {
      return <li className="transaction-list-item">Loading...</li>;
    }
    if (this.props.transactions.error) return this.renderError();

    return this.props.transactions.data.map(t => {
      const active = t.hash === this.props.activeTransactionId;
      return (
        <li
          className="transaction-list-item"
          key={`${t.hash}${t.timestamp}`}
          onClick={() => this.props.setActiveTransaction(t.hash)}
        >
          <TransactionListItem transaction={t} active={active} />
        </li>
      );
    });
  }
  render() {
    return <ul className="transaction-list">{this.renderItems()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    transactions: state.transactions,
    loading: state.loading,
    activeTransactionId: state.activeTransactionId
  };
}
export default connect(mapStateToProps, { setActiveTransaction })(
  TransasctionsList
);
