import css from "../FriendList/FriendList.module.css";
import defaultAvatar from "/src/user_icon.png";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friends__list}>
      {friends.map((friend) => (
        <li className={css.friends__item} key={friend.id}>
          <img className={css.friends__img} src={friend.avatar || defaultAvatar} alt="Avatar" width="48" />
          <p className={css.friends__name}>{friend.name}</p>
          <p className={friend.isOnline ? css.friends__online : css.friends__ofline}>{friend.isOnline ? 'Online' : 'Offline'}</p>
        </li>
      ))}
    </ul>
  );
}