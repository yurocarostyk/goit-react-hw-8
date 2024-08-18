import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactList from "../../components/ContactList/ContactList";

import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Layout from "../../components/Layout/Layout";
import Error from "../../components/Error/Error";

import { fetchContacts } from "../../redux/contacts/operation";
import {
  selectCurrentContact,
  selectError,
  selectFilteredContacts,
} from "../../redux/contacts/selector";

import EditForm from "../../components/EditForm/EditForm";

import css from "./ContactsPage.module.css";

export default function Contactspage() {
  const contacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  console.log("Contactspage ~ error:", error);

  const currentContact = useSelector(selectCurrentContact);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main>
      <section className={css.section}>
        <Layout>
          <div className={css.formWrapper}>
            {currentContact === null ? <ContactForm /> : <EditForm />}
          </div>
          <div className={css.searchWrapper}>
            <SearchBox />
          </div>
          {contacts.length > 0 && (
            <div className={css.contactsWrapper}>
              <ContactList contacts={contacts} />
            </div>
          )}
          {error && <Error errorMessage={error} />}
        </Layout>
      </section>
    </main>
  );
}