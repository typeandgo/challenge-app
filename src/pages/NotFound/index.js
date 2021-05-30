import { Link } from 'react-router-dom';
import Layout from 'components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <Layout>
      <div className={ styles.notFound }>

        <h2 className={ styles.title }>404</h2>

        <p className={ styles.text }>Page Not Found</p>

        <Link to='/' title='Home Page' className={ styles.link }>
          <FontAwesomeIcon icon={faArrowLeft} className={ styles.icon } />
          Home Page
        </Link>
        
      </div>
    </Layout>
  );
}

export default NotFound;
