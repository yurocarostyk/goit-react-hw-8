import { useDispatch, useSelector } from "react-redux";

import { IoLogOut } from "react-icons/io5";

import { logout } from "../../redux/auth/operation";
import { selectUser } from "../../redux/auth/selector";

import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={css.menuWrapper}>
      <p className={css.welcomeText}>
        👋🏻 <span>{user.name}</span>
      </p>
      <button type="button" className={css.btn} onClick={handleLogOut}>
        <IoLogOut color="whitesmoke" size={28} />
      </button>
    </div>
  );
}