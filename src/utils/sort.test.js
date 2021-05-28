import { sortTypes } from 'constants/index';
import { sort } from './sort';

describe('sort', () => {

  const input = [
    {
      id: 1,
      linkName: 'Lorem',
      linkUrl: 'https://www.lorem.com',
      votes: 5,
      createDate: 11,
      updateDate: 12
    },
    {
      id: 2,
      linkName: 'Ipsum',
      linkUrl: 'https://www.ipsum.com',
      votes: 3,
      createDate: 22,
      updateDate: 23
    },
    {
      id: 3,
      linkName: 'Dolor',
      linkUrl: 'https://www.dolor.com',
      votes: 1,
      createDate: 33,
      updateDate: 34
    },
    {
      id: 4,
      linkName: 'Sit',
      linkUrl: 'https://www.sit.com',
      votes: 1,
      createDate: 44,
      updateDate: 45
    },
    {
      id: 5,
      linkName: 'Amet',
      linkUrl: 'https://www.amet.com',
      votes: 5,
      createDate: 55,
      updateDate: 56
    },
];
  
  test('Returns given data with expected order when sortType equal to `DESC_BY_CREATE_DATE`', () => {
    // NOTE: crateDate bigger comes first-order
    
    const result = sort(sortTypes.DESC_BY_CREATE_DATE, input);
  
    expect(result[0].id).toEqual(5);
  });

  test('Returns given data with expected order when sortType equal to `ASC_BY_VOTES`', () => {
    // NOTE: votes smaller comes first-order
    // according to condition if there is plural votes than, updateDate bigger comes first-order

    const result = sort(sortTypes.ASC_BY_VOTES, input);
  
    expect(result[0].id).toEqual(4);
  });

  test('Returns given data with expected order when sortType equal to `DESC_BY_VOTES`', () => {
    // NOTE: votes bigger comes first-order
    // according to condition if there is plural votes than, updateDate bigger comes first-order

    const result = sort(sortTypes.DESC_BY_VOTES, input);
  
    expect(result[0].id).toEqual(5);
  });
});

