import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main>
      <h1 className={css.welcome}>Welcome 🎉</h1>
      <p className={css.secondary}>Need to save contact numbers?</p>
      <p className={css.secondary}>Feel free to use this app 😊</p>
    </main>
  );
}