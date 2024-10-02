import style from './Profile.module.css';

const Profile =  props  => {
    const {name, avatar, location,  tag} = props;
    const {followers, views, likes } = props.stats;

    return (
        <div className={style.profile}>
            <div className={style.description}>
                <img
                    src={avatar}
                    alt={name}
                    className={style.avatar}
                />
                <p className={style.h2}>{name}</p>
                <p className={style.tag}>@{tag}</p>
                <p className="location">{location}</p>
            </div>

            <ul className={style.stats}>
                <li className={style.item}>
                    <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
                </li>
                <li className={style.item}>
                    <span className="label">Views</span>
                    <span className="quantity">{views}</span>
                </li>
                <li className={style.item}>
                    <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile;