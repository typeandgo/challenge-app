import logo from 'logo.svg';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>

      <img src={logo} className="App-logo" width='200' alt="logo" />

      <h2 className={styles.brandName}>
        <strong>Link</strong>VOTE <span>Challenge</span>
      </h2>

    </header>
  );
}

export default Header;
