import user from '../hw_data/user.json';
import data from '../hw_data/data.json';
import friends from '../hw_data/friends.json';

import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />
    </>
  );
};
