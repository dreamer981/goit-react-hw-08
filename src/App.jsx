import ContactsForm from "./components/ContactsForm/ContactsForm";
import Contact from "./components/Contact/Contact";
import SearchBox from "./components/SearchBox/SearchBox"
import style from "./App.module.css";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.phoneBook}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      <Contact/>
    </div>
  );
}

export default App;
