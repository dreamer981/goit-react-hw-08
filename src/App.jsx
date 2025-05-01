// import ContactsForm from "./components/ContactsForm/ContactsForm";
// import Contact from "./components/Contact/Contact";
// import SearchBox from "./components/SearchBox/SearchBox"
// import style from "./App.module.css";
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from './redux/contacts/operations';

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div className={style.phoneBook}>
//       <h1>Phonebook</h1>
//       <ContactsForm />
//       <SearchBox />
//       <Contact/>
//     </div>
//   );
// }

// export default App;



import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { PrivateRoute } from './components/PrivateRoute';
import { RestrictedRoute } from './components/RestrictedRoute';
import Layout from './components/Layout';
import HomePage from './pages/HomePage/Homepage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistraionPage/RegistrationPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) return <div>Loading...</div>;

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
