/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './AddLinkButton.module.scss';

const AddLinkButton = () => {
  return (
    <Link to='/add-link' className={ styles.link } title='Submit a link'>
      <div className={ styles.iconContainer }>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <span>SUBMIT A LINK</span>
    </Link>
  );
}

export default AddLinkButton;
