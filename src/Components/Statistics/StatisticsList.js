import PropTypes from 'prop-types';
import Statistics from './Statistics';

function StatisticsList({ items }) {
  return (
    <ul className="stat-list">
      {items.map(item => (
        <Statistics
          key={item.id}
          label={item.label}
          percentage={item.percentage}
        />
      ))}
    </ul>
  );
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};

export default StatisticsList;
