import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import {Container} from "./App.styled";
import user from "../data/user.json";
import data from '../data/statistical-data.json';


function App() {
    return (
        <Container>
            <Profile username={user.name} tag={user.tag} location={user.location} avatar={user.avatar}
                     stats={user.stats} />
            <Statistics stats={data}/>
        </Container>
    );
}

export default App;
