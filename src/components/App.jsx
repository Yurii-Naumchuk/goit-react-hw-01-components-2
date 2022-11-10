import  Profile  from './Profile/Profile';
import Statistics from './Statistics/Statistics';

import { MeinTitle, MeinContainer } from './app.styled';


import user from '../data/user.json';
import data from '../data/data.json';
import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';
// import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <MeinContainer>
      <div>
        <MeinTitle>Profile</MeinTitle>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <div>
        <MeinTitle>Statistic</MeinTitle>
        <Statistics title="Upload stats" stats={data} />
        <FriendList
          friends={friends}
        />
      </div>
    </MeinContainer>
  );
};
