import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import ContactListItem from './ContactListItem/ContactListItem';
import Loader from 'components/Loader/Loader';

import { fetchContacts } from 'redux/operations';
import { getContacts, getError, getIsLoading } from 'redux/selectors';

import css from './ContactList.module.css';

const { contact_list_container, contact_list, contact_list_title } = css;

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  console.log('error: ', error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = useSelector(state => {
    const filterQuery = state.filter.toLowerCase();
    return state.contacts.items.filter(({ name }) =>
      name.toLowerCase().includes(filterQuery)
    );
  });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {contacts.items.length === 0 && (
            <>
              {error && !isLoading ? (
                <h2 className={contact_list_title}>
                  Something went wrong. Try later!
                </h2>
              ) : (
                <h2 className={contact_list_title}>There are no contacts</h2>
              )}
            </>
          )}
          <div className={contact_list_container}>
            <ul className={contact_list}>
              {filteredContacts.length === 0 && contacts.items.length !== 0 && (
                <h2 className={contact_list_title}>Not Found</h2>
              )}

              {filteredContacts.length !== 0 && (
                <>
                  {filteredContacts.map(({ id, name, phone }) => (
                    <ContactListItem
                      key={id}
                      id={id}
                      name={name}
                      phone={phone}
                    />
                  ))}
                </>
              )}
            </ul>
          </div>
        </>
      )}
    </>
  );
};
