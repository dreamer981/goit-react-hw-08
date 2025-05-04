import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import  Contact  from "../Contact/Contact";
import styles from "./ContactList.module.css";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  
  // Debug için contacts'leri loglayın
  console.log('Current contacts:', filteredContacts);

  return (
    <ul className={styles.ContactList}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => (
          <li key={id} className={styles.ContactListItem}>
            <Contact name={name} number={number} id={id} />
          </li>
        ))
      ) : (
        <p className={styles.noContacts}>No contacts found</p>
      )}
    </ul>
  );
};
