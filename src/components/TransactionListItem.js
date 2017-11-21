import React from 'react';
import TransactionInfo from './TransactionInfo';

function pad(n, l = 2) {
  n = n.toString();
  while (n.length < l) n = `0${n}`;
  return n;
}
const TransactionListItem = ({ transaction, active }) => {
  const { timestamp, status, type, amount } = transaction;
  const date = new Date(timestamp * 1000);
  const dateString = `${date.getFullYear()}-${pad(date.getMonth())}-${pad(
    date.getDate()
  )} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
    date.getSeconds()
  )}`;
  const info = active ? <TransactionInfo transaction={transaction} /> : null;
  return (
    <div>
      <div className={`transaction-item transaction-${type}`}>
        <span className="transaction-date">{dateString}</span>
        <span className="amount">
          {type === 'sent' ? '' : '+'}
          {amount} BTC
        </span>
      </div>
      {info}
    </div>
  );
};

export default TransactionListItem;
