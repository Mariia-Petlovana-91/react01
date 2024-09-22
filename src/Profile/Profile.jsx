import css from "../Profile/Profile.module.css";
import defaultAvatar from "/src/user_icon.png";

export default function Profile(props) {
  const { 
    username, 
    tag, 
    location, 
    avatar = defaultAvatar, 
    stats: { followers, views, likes }
  } = props;
 
  return (
    <div className={css.profile}>
      <div className={css.profile__info}>
        <img className={css.profile__avatar} src={avatar} alt="User avatar" width="68px" />
        <p className={css.profile__name}>{username}</p>
        <p className={css.profile__text}>@{tag}</p>
        <p className={css.profile__text}>{location}</p>
      </div>
      <ul className={css.profile__list}>
        <li className={css.profile__item}>
          <span className={css.profile__indicators}>Followers</span>
          <span className={css.profile__value}>{followers}</span>
        </li>
        <li className={css.profile__item}>
          <span className={css.profile__indicators}>Views</span>
          <span className={css.profile__value}>{views}</span>
        </li>
        <li className={css.profile__item}>
          <span className={css.profile__indicators}>Likes</span>
          <span className={css.profile__value}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}