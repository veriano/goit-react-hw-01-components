import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({ items }) {
  return (
    <ul className="list-friends">
      {items.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
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
