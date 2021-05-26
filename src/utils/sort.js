import { sortTypes } from 'constants/index';

export const sort = (sortType, data) => {
  if ( sortType === sortTypes.ASC_BY_VOTES ) {

    return data.sort((a, b) => parseFloat(a.votes) - parseFloat(b.votes)
      || parseFloat(b.updateDate) - parseFloat(a.updateDate)); // Second condition for: Last clicked move to top for those with the same votes

  } else if ( sortType === sortTypes.DESC_BY_VOTES ) {

    return data.sort((a, b) => parseFloat(b.votes) - parseFloat(a.votes)
      || parseFloat(b.updateDate) - parseFloat(a.updateDate)); // Seconf condition for: Last clicked move to top for those with the same votes

  } else {

    return data.sort((a, b) => parseFloat(b.createDate) - parseFloat(a.createDate)); // There is no second condition. The only condition is createdDate
  }
}
