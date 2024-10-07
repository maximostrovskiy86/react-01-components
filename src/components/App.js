import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transaction/TransactionHistory";
import {Container} from "./App.styled";
import user from "../data/user.json";
import data from '../data/statistical-data.json';
import friends from "../data/friends.json";
import items from "../data/transactions.json";


function App() {
    return (
        <Container>
            <Profile username={user.name} tag={user.tag} location={user.location} avatar={user.avatar}
                     stats={user.stats}/>
            <Statistics stats={data}/>
            <FriendList friends={friends}/>
            <TransactionHistory items={items}/>
        </Container>
    );
}

export default App;
