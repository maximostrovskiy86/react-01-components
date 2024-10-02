import Profile from "./profile/Profile";
import user from "../data/user.json";


function App() {
    return (
        <>
            <Profile username={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
        </>
    );
}

export default App;
