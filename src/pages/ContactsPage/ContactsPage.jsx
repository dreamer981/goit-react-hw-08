import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { useNavigate } from 'react-router-dom';
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const navigate = useNavigate();

  // Kullanıcı giriş yapmadıysa login sayfasına yönlendir
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      dispatch(getContacts()); // Kullanıcı giriş yaptıysa kontakları al
    }
  }, [isLoggedIn, dispatch, navigate]);

  return (
    <div className={styles.contactsPage}>
      <h1>Contacts</h1>
      {contacts.length === 0 ? (
        <p>No contacts available. Add some contacts!</p>
      ) : (
        <ul className={styles.contactList}>
          {contacts.map(contact => (
            <li key={contact.id} className={styles.contactItem}>
              <p>{contact.name}</p>
              <p>{contact.number}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactsPage;
