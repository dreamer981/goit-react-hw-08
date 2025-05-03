import styles from './HomeHero.module.css';

const HomeHero = () => {
  return (
    <div className={styles.homeHero}>
      <h1>Welcome to Phonebook</h1>

      <p>Log in or register to manage your contacts.</p>
    </div>
  );
}
export default HomeHero;