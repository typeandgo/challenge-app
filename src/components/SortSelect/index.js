import PropTypes from 'prop-types';
import { sortTypes } from 'constants/index';
import styles from './SortSelect.module.scss';

const SortSelect = ({ defaultValue, onChange }) => {
  return (
    <select className={styles.select} placeholder='Order by' defaultValue={ defaultValue } onChange={ e => onChange(e.target.value) }>
      
      <option value={ sortTypes.DESC_BY_CREATE_DATE } disabled>
        Order by
      </option>

      <option value={ sortTypes.DESC_BY_VOTES }>
        Most Voted (Z-A)
      </option>

      <option value={ sortTypes.ASC_BY_VOTES }>
        Less Voted (A-Z)
      </option>
      
    </select>
  );
}

SortSelect.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default SortSelect;
