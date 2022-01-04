import propTypes from 'prop-types';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({ items }) {
  return (
    <ul className="list-friends">
      {items.map(item => (
        <FriendListItem
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ),
};
