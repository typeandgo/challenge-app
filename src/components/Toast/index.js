/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { TOAST_TIMEOUT } from 'constants/index';
import styles from './Toast.module.scss';

const Toast = ({ children, onClose }) => {
  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, TOAST_TIMEOUT)
  }, []);

  return ReactDOM.createPortal(<div className={styles.toast}>
    <div className={styles.toastBody}>
      { children }
    </div>
  </div>, document.getElementById('toast-root'));
}

Toast.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Toast;
