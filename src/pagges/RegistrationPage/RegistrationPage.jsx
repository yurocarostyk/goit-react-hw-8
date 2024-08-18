import RegisterForm from "../../components/RegistrationForm/RegistrationForm";

import css from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <main className={css.main}>
      <section className={css.section}>
        <RegisterForm />
      </section>
    </main>
  );
}