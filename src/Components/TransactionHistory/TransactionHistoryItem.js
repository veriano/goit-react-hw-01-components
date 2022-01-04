import PropTypes from 'prop-types';
import './TransactionHistory.css';

export default function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr>
      <td className="table-item">{type}</td>
      <td className="table-item">{amount}</td>
      <td className="table-item">{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
