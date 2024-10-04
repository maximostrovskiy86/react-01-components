import FriendListItem from "./friendListItem/FriendListItem";
import {FriendListContainer} from "./FriendList.styled";


const FriendList = ({friends}) => {
    console.log("friends", friends);

    return (
        <FriendListContainer>
            {friends.map(({avatar, id, isOnline, name}) => (
                <FriendListItem key={id} avatar={avatar} id={id} isOnline={isOnline} name={name}/>
            ))}
        </FriendListContainer>
    )
}

export default FriendList;