import {Container, Description, Stats, Quantity, Label} from './Profile.styled';

const Profile = props => {
    const {username, avatar, location, tag} = props;
    const {followers, views, likes} = props.stats;

    return (
        <Container>
            <Description>
                <img
                    src={avatar}
                    alt={username}
                />
                <h1>{username}</h1>
                <p>@{tag}</p>
                <p>{location}</p>
            </Description>
            <Stats>
                <li>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </li>
                <li>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </li>
                <li>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </li>
            </Stats>
        </Container>
    )
}

export default Profile;