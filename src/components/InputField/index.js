import PropTypes from 'prop-types';
import { classNames } from 'utils/classNames';
import styles from './InputField.module.scss';

const InputField = ({ title, name, placeholder, value, error, onChange }) => {
  return (
    <fieldset className={ classNames({
      [styles.inputField]: true,
      [styles.hasError]: error
    }) }>

      <label htmlFor={ name }>
        { title }:
      </label>

      <input
        name={ name }
        id={ name }
        type='text'
        placeholder={ placeholder }
        value={ value }
        onChange={ e => onChange(e.target.value) } />
    
      <span className={ styles.error }>
        { error }
      </span>
      
    </fieldset>
  );
}

InputField.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default InputField;
