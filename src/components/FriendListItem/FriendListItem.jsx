import css from "../FriendListItem/FriendListItem.module.css";
import defaultAvatar from "/src/user_icon.png";

export default function FriendListItem({avatar, name, isOnline}) {
	return (
		<div>
		      <img className= {css.friend__img}src= {avatar || defaultAvatar }
                    alt="Avatar" width="48" />
		      <p className= {css.friend__name}> {name}</p>
		      <p className= {isOnline ? css.friend__online: css.friend__ofline}>
		      	{isOnline ? 'Online' : 'Offline'}</p>
		</div>
	);
}