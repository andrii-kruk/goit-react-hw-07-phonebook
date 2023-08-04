import Notify from './Notify/Notify';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
const { section, contacts_container, contact_list_title } = css;

export const App = () => {
  return (
    <section className={section}>
      <ContactForm />
      <div className={contacts_container}>
        <h3 className={contact_list_title}>Contact List</h3>
        <Filter />
        <ContactList />
        <Notify />
      </div>
    </section>
  );
};
