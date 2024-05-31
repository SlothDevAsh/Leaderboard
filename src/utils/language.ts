import {SortType} from './types';

const language = {
  LEADER_BORDER: 'Leader Board',
  GO: 'Go',
  SORT_BY: 'Sort By',
  NAME: 'Name',
  LOWEST_RANK: 'Lowest Rank',
  RANK: 'Rank',
  NO_OF_BANANAS: 'No. of Bananas',
  SEARCH_USERS: 'Search users',
  START_SEARCHING: 'Press "Go" to start searching now',
  NO_RESULT:
    'This user name does not exist! Please specify an existing user name!',
  SORTED_BY: (value: SortType) =>
    `Sorting by ${
      value === 'name' ? 'name in alphabetical order.' : 'lowest rank.'
    }`,
    FUZZY_SEARCH: 'Fuzzy Search: ',
};

export default language;
