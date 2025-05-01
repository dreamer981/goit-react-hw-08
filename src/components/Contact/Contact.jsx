import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import { deleteContact } from "../../redux/contactsOps";
import styles from "../Contact/Contact.module.css";

export default function Contact() {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    const contactToDelete = { id }; 
    dispatch(deleteContact(contactToDelete)); 
  };

  return (
    <div className={styles.contactList}>
      {contacts.map((contact) => (
        <div key={contact.id} className={styles.contactItem}>
          <div className={styles.contactDetails}>
            <span className={styles.contactName}>
              <i className="fas fa-user"></i> {contact.name}
            </span>

            <span className={styles.contactNumber}>
              <i className="fas fa-phone-alt"></i> {contact.number}
            </span>
          </div>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
