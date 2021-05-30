import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Layout from 'components/Layout';
import Toast from 'components/Toast';
import { Link } from 'react-router-dom';
import InputField from 'components/InputField';
import { isValidUrl } from 'utils/isValidUrl';
import { STORE_NAME, validationMessages } from 'constants/index';
import styles from './AddLink.module.scss';

const AddLink = () => {
  const [linkName, setLinkName] = useState('');
  const [linkUrl, setLinkUrl] = useState('');
  const [inputErrors, setInputErrors] = useState({});
  const [isToastActive, setIsToastActive] = useState(false);
  const [toastData, setToastData] = useState(null);

  const toastClose = () => {
    setToastData(null);
    setIsToastActive(false);
  }
  
  const validateInputs = () => {
    const isLinkNameValid = linkName.trim().length;
    const isLinkUrlValid = isValidUrl(linkUrl.trim());

    setInputErrors({
      ...inputErrors,
      linkName: linkName.trim().length ? null : validationMessages.requiredName,
      linkUrl: linkUrl.trim().length ? (isValidUrl(linkUrl.trim()) ? null : validationMessages.invalidUrl) : validationMessages.requiredUrl
    });

    return isLinkNameValid && isLinkUrlValid;
  }

  const onSubmit = e => {
    e.preventDefault();

    if(validateInputs()) {
      const dateNow = Date.now();
      const data = {
        id: uuidv4(),
        linkName,
        linkUrl,
        votes: 0,
        createDate: dateNow,
        updateDate: dateNow
      };

      const linksData = JSON.parse(localStorage.getItem(STORE_NAME)) || [];
      const updatedLinksData = [...linksData, data];

      localStorage.setItem(STORE_NAME, JSON.stringify(updatedLinksData));

      setLinkName('');
      setLinkUrl('');
      setToastData(data.linkName);
      setIsToastActive(true);
    };
  }

  return (
    <Layout>
      <form className={ styles.form } onSubmit={ onSubmit }>

        <Link to='/' title='Return to List' className={ styles.link }>
          <FontAwesomeIcon icon={faArrowLeft} className={ styles.icon } />
          Return to List
        </Link>

        <h2 data-test='pageTitle'>
          Add New Link
        </h2>

        <InputField
          name='Link Name'
          value={ linkName }
          error={ inputErrors?.linkName }
          onChange={ value => setLinkName(value) }
          data-test='inputLinkName' />

        <InputField
          name='Link Url'
          value={ linkUrl }
          error={ inputErrors?.linkUrl }
          onChange={ value => setLinkUrl(value) }
          data-test='inputLinkUrl' />

        <button type='submit'>
          ADD
        </button>

      </form>

      {
        isToastActive
        &&
        <Toast onClose={ toastClose }>
          <span>
            <strong>{ toastData }</strong> added.
          </span>
        </Toast>
      }

    </Layout>
  );
}

export default AddLink;
