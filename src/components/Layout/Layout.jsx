import css from "./Layout.module.css";

export default function Container({ children }) {
  return <div className={css.container}>{children}</div>;
}