/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import Layout from 'components/Layout';
import Modal from 'components/Modal';
import Toast from 'components/Toast';
import AddLinkButton from 'components/AddLinkButton';
import RemoveLink from 'components/RemoveLink';
import SortSelect from 'components/SortSelect';
import ListItem from 'components/ListItem';
import Pagination from 'components/Pagination';
import { PAGE_SIZE, sortTypes } from 'constants/index';
import { sort } from 'utils/sort';
import styles from './Home.module.scss';

const Home = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [isToastActive, setIsToastActive] = useState(false);
  const [toastData, setToastData] = useState(null);
  const [sortType, setSortType] = useState(sortTypes.DESC_BY_CREATE_DATE)
  const [currentPage, setCurrentPage] = useState(1);
  const [links, setLinks] = useState([]);
  const [sortedLinks, setSortedLinks] = useState(sort(sortType, links));
  const indexOfLastLink = currentPage * PAGE_SIZE;
  const indexOfFirstLink = indexOfLastLink - PAGE_SIZE;
  const paginatedLinks = sortedLinks.slice(indexOfFirstLink, indexOfLastLink);

  const modalClose = () => {
    setModalData(null);
    setIsModalActive(false);
  }

  const toastClose = () => {
    setToastData(null);
    setIsToastActive(false);
  }

  const upVote = id => {
    let voteItemIndex = links.findIndex(item => item.id === id);
    links[voteItemIndex].votes += 1;
    links[voteItemIndex].updateDate = Date.now();
    
    localStorage.setItem('links', JSON.stringify(links));

    loadData();
  };

  const downVote = id => {
    let voteItemIndex = links.findIndex(item => item.id === id);
    links[voteItemIndex].votes -= 1;
    links[voteItemIndex].updateDate = Date.now();
    
    localStorage.setItem('links', JSON.stringify(links));

    loadData();
  };

  const openDeleteConfirmModal = data => {
    setModalData(data);
    setIsModalActive(true);
  };

  const loadData = () => {
    const linksData = JSON.parse(localStorage.getItem('links')) || [];

    setLinks(linksData);

    if (linksData.length <= PAGE_SIZE) {
      setCurrentPage(1);
    }
  }

  const deleteLink = data => {
    const updatedLinks = links.filter(item => item.id !== data.id);

    localStorage.setItem('links', JSON.stringify(updatedLinks));

    modalClose();
    setToastData(data.linkName);
    setIsToastActive(true);

    loadData();
  }

  useEffect(() => {
    loadData();
  }, [])

  useEffect(() => {
    setSortedLinks(sort(sortType, links));
  }, [sortType, links]);

  return (
    <Layout>

      <AddLinkButton />

      { 
        links.length > 0
        && <div className={ styles.listContainer }>

          <div className={ styles.list }>

            <SortSelect defaultValue={ sortType } onChange={ sortTypeName => setSortType(sortTypeName) } />

            <ul>
              {
                paginatedLinks.map((item, index) => (
                  <ListItem
                    key={ index }
                    id={ item.id }
                    linkName={ item.linkName }
                    linkUrl={ item.linkUrl }
                    votes={ item.votes }
                    upVote={ upVote }
                    downVote={ downVote }
                    deleteLink={ openDeleteConfirmModal } />
                ))
              }
            </ul>
          </div>

          { 
            links.length > 5 
            &&
            <Pagination
              currentPage={ currentPage }
              pageSize={ PAGE_SIZE }
              totalItems={ links.length }
              paginate={ pageNumber => setCurrentPage(pageNumber) } />  
          }
        </div>
      }

      {
        isModalActive
        &&
        <Modal title='Remove Link' onClose={ modalClose }>
          <RemoveLink
            data={ modalData }
            onOk={ deleteLink }
            onCancel={ modalClose } />
        </Modal>
      }
      
      {
        isToastActive
        &&
        <Toast onClose={ toastClose }>
          <span>
            <strong>{ toastData }</strong> removed.
          </span>
        </Toast>
      }
    </Layout>
  );
}

export default Home;
