import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ReactDom from 'react-dom';
import styles from './Modal.module.scss';

const Modal = ({ title, children, onClose }) => {
  const modalContent = ReactDom.createPortal(<div className={ styles.modal } onClick={ onClose }>
    <div className={ styles.modalContent } onClick={ e => e.stopPropagation() }>
      
      <div className={ styles.modalHeader }>
        <h3 className={ styles.modalTitle }>
          { title }
        </h3>

        <button className={ styles.modalCloseButton } onClick={ onClose } title='Close'><FontAwesomeIcon icon={faTimes} /></button>
      </div>

      <div className={ styles.modalBody}>
        { children }
      </div>
    </div>
  </div>, document.getElementById('modal-root'));

  return modalContent;
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal;
