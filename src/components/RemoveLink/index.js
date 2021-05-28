import PropTypes from 'prop-types';
import styles from './RemoveLink.module.scss';

const RemoveLink = ({ data, onOk, onCancel }) => {
  return (
    <div className={ styles.removeLink }>
      
      <h4 className={ styles.title }>Do you want to remove:</h4>
      <p className={ styles.link }>{ data?.linkName }</p>

      <div className={ styles.buttons } data-test='removeLinkButtons'>
        <button onClick={ () => onOk(data) } data-test='removeLinkOkButton'>OK</button>
        <button onClick={ onCancel } data-test='removeLinkCancelButton'>CANCEL</button>
      </div>
    </div>
  );
}

RemoveLink.propTypes = {
  data: PropTypes.object,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

export default RemoveLink;
