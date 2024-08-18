import css from "./Error.module.css";

export default function Error({ errorMessage }) {
  return (
    <div className={css.wrapper}>
      <p className={css.error}>{errorMessage}</p>
      <p className={css.error}>Please try again.</p>
    </div>
  );
}