import {FriendItem, Status} from "./FriendListItem.styled";

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <FriendItem>
            <Status isOnline={isOnline}>{isOnline}</Status>
            <img className="avatar" src={avatar} alt="User avatar" width="48"/>
            <p className="name">{name}</p>
        </FriendItem>
    )
}

export default FriendListItem;