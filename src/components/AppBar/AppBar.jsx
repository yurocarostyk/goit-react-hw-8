import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selector";

import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

import css from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedin = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />

      {isLoggedin ? <UserMenu /> : <AuthNav />}
    </header>
  );
}