import logo from 'assets/logo.svg';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>

      <img src={logo} width='200' alt="LinkVOTE Challenge" />

      <h2 className={styles.brandName}>
        <strong>Link</strong>VOTE <span>Challenge</span>
      </h2>

    </header>
  );
}

export default Header;
