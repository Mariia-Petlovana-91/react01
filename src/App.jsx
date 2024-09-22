import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import Transactions from "./components/Transactions/Transactions";
import Section from "./components/Section/Section";

export default function App() {
  return (
	<>
		<Section title={"Карточка користувача"}>
			<Profile
                        username={userData.username}
                        tag={userData.tag}
                        location={userData.location}
                        avatar={userData.avatar}
                        stats={{
                              followers: userData.stats.followers,
                              views: userData.stats.views,
                              likes: userData.stats.likes
                        }}
	            />
		</Section>
		<Section title={"Карточки друзів"}>
			<FriendList friends={friends} />  
		</Section>
		<Section title={"Таблиця транзакцій"}>
			<Transactions items={transactions} />
		</Section>	  
      </>
  );
}
