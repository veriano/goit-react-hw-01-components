import PropTypes from 'prop-types';
import './Profile.css';

export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          width="100"
          className="avatar"
        />
        <p className="name">
          <b>{name}</b>
        </p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li className="item">
          <span className="label">Followers</span>
          <span className="quantity">
            <b>{stats.followers}</b>
          </span>
        </li>
        <li className="item">
          <span className="label">Views</span>
          <span className="quantity">
            <b>{stats.views}</b>
          </span>
        </li>
        <li className="item">
          <span className="label">Likes</span>
          <span className="quantity">
            <b>{stats.likes}</b>
          </span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
