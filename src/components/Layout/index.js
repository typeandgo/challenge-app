import PropTypes from 'prop-types';
import Header from '../Header'
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={ styles.layout }>
        { children }
      </main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;
