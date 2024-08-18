import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { selectIsLoggedIn } from "../../redux/auth/selector";

import css from "./Navigation.module.css";

const createnavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  const isLoggedin = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={createnavLinkClass}>
        Home
      </NavLink>
      {isLoggedin && (
        <NavLink to="/contacts" className={createnavLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}