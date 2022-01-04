import PropTypes from 'prop-types';
import './Statistics.css';

export default function Statistics({ label, percentage }) {
  return (
    <li className="list-item" style={{ backgroundColor: getRandomHexColor() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
