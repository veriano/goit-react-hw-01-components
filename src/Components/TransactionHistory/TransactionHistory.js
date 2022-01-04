import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import './TransactionHistory.css';

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th className="table-head-item">Type</th>
          <th className="table-head-item">Amount</th>
          <th className="table-head-item">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TransactionHistoryItem
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};
