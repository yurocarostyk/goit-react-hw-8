import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

export default function ContactList({ contacts }) {
  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.item}>
            <Contact contactInfo={contact} />
          </li>
        );
      })}
    </ul>
  );
}