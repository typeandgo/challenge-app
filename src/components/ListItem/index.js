import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faMinusCircle, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import styles from './ListItem.module.scss';

const ListItem = ({id, linkName, linkUrl, votes, upVote, downVote, deleteLink}) => {
  return (
    <li className={ styles.listItem }>
      <button className={ styles.delete } title='Delete' onClick={ () => deleteLink({id, linkName}) }><FontAwesomeIcon icon={faMinusCircle} /></button>
      
      <div className={ styles.points }>
        <span>{ votes }</span>
        POINTS
      </div>

      <div className={ styles.content }>
        
        <h3>{ linkName }</h3>
        
        <p onClick={ () => window.open(linkUrl) } title={ linkUrl }>({ linkUrl }) <FontAwesomeIcon icon={faExternalLinkAlt} /></p>
        
        <div className={ styles.buttons }>

          <button className={ styles.upVote } onClick={ () => upVote(id) } title='Up Vote'>
            <FontAwesomeIcon icon={faChevronUp} />
            Up Vote
          </button>

          <button className={ styles.downVote } onClick={ () => downVote(id) } title='Down Vote'>
            <FontAwesomeIcon icon={faChevronDown} />
            Down Vote
          </button>
        </div>
      </div>
    </li>
  );
}

ListItem.propTypes = {
  id: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  deleteLink: PropTypes.func.isRequired
}

export default ListItem;
