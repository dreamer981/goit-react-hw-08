import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import  Contact  from "../Contact/Contact";
import styles from "./ContactList.module.css";

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);  
  // Debug için contacts'leri loglayın
  console.log('Current contacts:', contacts);

  return (
    <ul className={styles.ContactList}>
      {contacts.map((contact) => (
        <li
          key={contact.id}
          className="w bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-md"
        >
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
};
