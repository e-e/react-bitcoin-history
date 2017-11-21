import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAddress, fetchTransactions } from '../actions';

class Form extends Component {
  constructor(props) {
    super(props);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onSetAddressClicked = this.onSetAddressClicked.bind(this);
  }
  onAddressChange(e) {
    this.props.setAddress(e.target.value);
  }
  onSetAddressClicked(e) {
    e.preventDefault();
    this.props.fetchTransactions(this.props.btcAddress);
  }
  render() {
    return (
      <div className="btc-form-wrap">
        <div className="btc-address-wrap">
          <input
            className="btc-address"
            value={this.props.btcAddress}
            onChange={this.onAddressChange}
          />
          <span className="btc-address-set">
            <a href="#" onClick={this.onSetAddressClicked}>
              load
            </a>
          </span>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { transactions: state.transactions, btcAddress: state.btcAddress };
}
export default connect(mapStateToProps, {
  setAddress,
  fetchTransactions
})(Form);
