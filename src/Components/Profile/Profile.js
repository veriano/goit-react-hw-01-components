import PropTypes from 'prop-types';
import './Profile.css';

export default function Profile({
  name,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) {
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
            <b>{followers}</b>
          </span>
        </li>
        <li className="item">
          <span className="label">Views</span>
          <span className="quantity">
            <b>{views}</b>
          </span>
        </li>
        <li className="item">
          <span className="label">Likes</span>
          <span className="quantity">
            <b>{likes}</b>
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
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
