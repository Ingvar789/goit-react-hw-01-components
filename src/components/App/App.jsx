// імпорт компонент
import { Profile } from 'components/Profile/Profile';
import { FriendList } from 'components/FriendList/FriendList';
import { Statistics } from 'components/Statistics/Statistics';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Container } from './App.styled';
// імпорт інфи з бекенд
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import user from 'data/user.json';

const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <Container>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics
        title='Upload stats'
        data={data}
      />
      <FriendList
        data={friends}
      />
      <TransactionHistory
        data={transactions}
      />
    </Container>
  );
};
