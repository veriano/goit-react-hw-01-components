import Profile from './Components/Profile';
import StatisticsList from './Components/Statistics/StatisticsList';
import Section from './Components/Section';
import FriendList from './Components/FriendList';
import TransactionHistory from './Components/TransactionHistory';
import datas from './data/data.json';
import user from './data/user.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Section title="Upload stats">
        <StatisticsList items={datas} />
      </Section>

      <FriendList items={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
