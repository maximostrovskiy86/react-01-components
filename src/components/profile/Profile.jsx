import {Container, Description, Stats, Quantity, Label} from './Profile.styled';
import PropTypes from 'prop-types';


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

Profile.propTypes = {
    username: PropTypes.string,
    avatar: PropTypes.string,
    location: PropTypes.string,
    tag: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        likes: PropTypes.number,
        views: PropTypes.number,
    })
}

export default Profile;