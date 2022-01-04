import Profile from './Components/Profile';
import StatisticsList from './Components/Statistics/StatisticsList';
import Section from './Components/Section';
import FriendList from './Components/FriendList';
import TransactionHistory from './Components/TransactionHistory';
import datas from './data.json';
import user from './user.json';
import friends from './friends.json';
import transactions from './transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Section title="Upload stats">
        <StatisticsList items={datas} />
      </Section>

      <FriendList items={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
}
