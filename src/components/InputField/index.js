import PropTypes from 'prop-types';
import { classNames } from 'utils/classNames';
import styles from './InputField.module.scss';

const InputField = ({ name, value, error, onChange }) => {
  return (
    <fieldset className={ classNames({
      [styles.inputField]: true,
      [styles.error]: error
    }) }>
    <label>
      { name }:
      <input name='linkName' type='text' value={ value } onChange={ e => onChange(e.target.value) } />
      <span>{ error }</span>
    </label>
  </fieldset>
  );
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default InputField;
