import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress, fetchTransactions } from '../actions';

import Form from './Form';
import TransactionsList from './TransactionsList';

class BitcoinHistoryOuter extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    if (this.props.address) {
      this.props.setAddress(this.props.address);
      this.props.fetchTransactions(this.props.address);
    }
  }
  render() {
    return (
      <div className="bitcoin-history">
        {!this.props.address ? <Form /> : null}
        <TransactionsList />
      </div>
    );
  }
}

export default connect(null, { setAddress, fetchTransactions })(
  BitcoinHistoryOuter
);
