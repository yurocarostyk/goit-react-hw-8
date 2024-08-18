import { NavLink } from "react-router-dom";

import css from "./AuthNav.module.css";
import clsx from "clsx";

const createnavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function AuthNav() {
  return (
    <div className={css.authWrapper}>
      <NavLink to="/register" className={createnavLinkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={createnavLinkClass}>
        Log in
      </NavLink>
    </div>
  );
}