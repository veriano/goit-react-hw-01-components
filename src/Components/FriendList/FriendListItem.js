import PropTypes from 'prop-types';
import './FriendList.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="item-friends">
      <span
        className="status"
        style={{
          backgroundColor: isOnline ? 'rgb(0, 255, 0)' : 'rgb(255, 0, 0)',
        }}
      ></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
