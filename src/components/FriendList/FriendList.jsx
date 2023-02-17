import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

const FriendList = props => {
  const { friends } = props;
  return (
    <ul className={css.friend_list}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
