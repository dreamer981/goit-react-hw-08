import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1>Welcome to the Contact Book</h1>
      <p>This is your personal contact manager. Manage your contacts easily!</p>
      
      <div className={styles.buttons}>
        <Link to="/login">
          <button className={styles.loginButton}>Login</button>
        </Link>
        <Link to="/register">
          <button className={styles.registerButton}>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
