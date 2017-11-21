import React from 'react';

const TransasctionInfo = ({ transaction }) => {
  const { hash, data, status, confirmations, block, type } = transaction;
  return (
    <div className="transaction-additional-info">
      <div className="info-item">
        <div className="label">Type</div>
        <div className="value cap">{type}</div>
      </div>

      <div className="info-item">
        <div className="label">Status</div>
        <div className={`value cap status-${status}`}>{status}</div>
      </div>

      <div className="info-item">
        <div className="label">Hash</div>
        <div className="value break">{hash}</div>
      </div>

      <div className="info-item">
        <div className="label">Block</div>
        <div className="value break">{block}</div>
      </div>

      <div className="info-item">
        <div className="label"># Confirmations</div>
        <div className="value">{confirmations}</div>
      </div>
    </div>
  );
};

export default TransasctionInfo;
