/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { TOAST_TIMEOUT } from 'constants/index';
import styles from './Toast.module.scss';

const Toast = ({ show, children, onClose }) => {
  const toastRoot = document.querySelector('#toast-root');
  const [node] = useState(document.createElement('div'));

  const removeNode = () => {
    if (toastRoot.children.length) {
      toastRoot.childNodes[0].remove();
    }
  }

  useEffect(() => {
    if (show) {
      toastRoot.appendChild(node).classList.add('toast');

      setTimeout(() => {
        removeNode();
        onClose();
      }, TOAST_TIMEOUT)

    } else {

      removeNode();
    }

    return () => removeNode();

  }, [node, show]);

  return ReactDOM.createPortal(<div className={styles.toast}>
    <div className={styles.toastBody}>
      { children }
    </div>
  </div>, node);
}

Toast.propTypes = {
  show: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.node.isRequired
  ]),
  onClose: PropTypes.func.isRequired
}

export default Toast;
