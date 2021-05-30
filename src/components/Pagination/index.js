import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styles from './Pagination.module.scss';

const Pagination = ({currentPage, pageSize, totalItems, paginate}) => {
  const totalPages = Math.ceil(totalItems / pageSize);
  let pageNumbers = [];

  for(let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const prevPage = () => {
    const targetPage = currentPage > 1 ? currentPage - 1 : currentPage;
    paginate(targetPage);
  }

  const nextPage = () => {
    const targetPage = currentPage < totalPages ? currentPage + 1 : currentPage;
    paginate(targetPage);
  }

  return (
    <div className={styles.pagination}>

      <button onClick={ prevPage } disabled={ currentPage === 1 } title='Previous' data-test='prevButton'>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <ul>
        { 
          pageNumbers.map(number => (
            <li
              key={ number }
              data-test={`pageNumber-${number}`}
              className={ currentPage === number ? styles.active : '' }
              onClick={ () => paginate(number) }>
              { number }
            </li>
          ))
        }
      </ul>

      <button onClick={ nextPage } disabled={ currentPage === totalPages } title='Next' data-test='nextButton'>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
      
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired
}

export default Pagination;
