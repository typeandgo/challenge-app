import PropTypes from 'prop-types';
import { sortTypes } from 'constants/index';
import styles from './Select.module.scss';

const Select = ({ defaultValue, onChange }) => {
  return (
    <select className={styles.select} placeholder='Order by' defaultValue={ defaultValue } onChange={ e => onChange(e.target.value) }>
      <option value={ sortTypes.DESC_BY_CREATE_DATE } disabled>Order by</option>
      <option value={ sortTypes.DESC_BY_VOTES }>
        Most Voted (Z-A)
      </option>
      <option value={ sortTypes.ASC_BY_VOTES }>
        Less Voted (A-Z)
      </option>
    </select>
  );
}

Select.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Select;
