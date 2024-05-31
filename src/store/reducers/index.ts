import {StoreState, UserAction, UserType} from '../../utils/types';

import {
  getTop10Users,
  getUserRank,
  isSortType,
  isUserType,
  isUserTypeArray,
  isUserInTop10List,
  replaceSearchedUserWithLastRankedUser,
  sortByLowestRank,
  sortByName,
  sortByMostBananas,
} from '../../utils/helper';
import {actions} from '../actions';

const initialState: StoreState = {
  users: [], // The list of users to be displayed when a user searches for a user in the search box
  searchInput: '', // The text currently being typed in the search box by the user
  searchedUser: undefined, // The specific user that matches the search criteria from the dataset
  isSearching: false, // A boolean indicating whether a search operation is currently in progress
  isSearchCompleted: false, // A boolean indicating if the search operation has finished, useful to display a message if no search results are found
  isFuzzySearch: true, // A boolean to enable or disable fuzzy search functionality
  sortBy: '', // The criteria for sorting the users list, can be either 'name' or 'lowest rank'
  showPopUp: false, // A boolean to control the visibility of a popup; true if the popup should be displayed
};

export const userReducer = (
  state: StoreState = initialState,
  action: UserAction,
): StoreState => {
  switch (action.type) {
    case actions.SEARCH_USERS:
      if (isUserTypeArray(action.payload)) {
        const _users = action.payload;

        const query = state.searchInput.toLowerCase();

        // if fuzzy search is turned off
        if (!state.isFuzzySearch) {
          const searchedUser = _users.find(
            user => user.name.toLowerCase() === query.toLowerCase(),
          );

          // user not found
          if (!searchedUser) {
            return {
              ...state,
              users: [],
              isSearching: false,
              searchedUser: undefined,
              isSearchCompleted: true,
            };
          }

          // user found, so find top 10 users
          const top10Users = getTop10Users(_users);

          let _newUsers: UserType[] = [];
          if (isUserType(searchedUser)) {
            // if the searched user is in top 10
            if (isUserInTop10List(top10Users, searchedUser)) {
              _newUsers = top10Users;
            } else {
              // user is not in top 10, so get this user rank
              const rank = getUserRank(_users, searchedUser);

              // replace the user with 10th user in the top10 list
              _newUsers = replaceSearchedUserWithLastRankedUser(
                top10Users,
                searchedUser,
                rank,
              );
            }

            // check if sortBy is enabled
            if (state.sortBy === 'name') {
              _newUsers = sortByName(_newUsers);
            }

            if (state.sortBy === 'lowest_ranked') {
              _newUsers = sortByLowestRank(_newUsers);
            }

            return {
              ...state,
              users: _newUsers,
              searchedUser: searchedUser,
              isSearchCompleted: true,
              isSearching: false,
            };
          }

          return {
            ...state,
            users: top10Users,
            searchedUser: searchedUser,
            isSearchCompleted: true,
            isSearching: false,
          };
        }

        // fuzzy search
        const filteredUsers = _users.filter(user =>
          user.name.toLowerCase().includes(query),
        );

        const sortedUsers = filteredUsers
          .sort((a, b) => b.bananas - a.bananas)
          .map((user, index) => ({
            ...user,
            rank: getUserRank(filteredUsers, user),
          }));

        return {
          ...state,
          users: sortedUsers,
          searchedUser: undefined,
          isSearchCompleted: true,
          isSearching: false,
        };
      }

    case actions.SORT_USERS:
      if (isSortType(action.payload)) {
        const sortBy = action.payload;
        // sort users basing on sortBy

        if (sortBy === 'lowest_ranked') {
          const _users = sortByLowestRank(state.users);

          return {
            ...state,
            users: _users,
            isSearching: false,
          };
        }

        if (sortBy === 'name') {
          const _users = sortByName(state.users);

          return {
            ...state,
            users: _users,
            isSearching: false,
          };
        }

        if (sortBy === '') {
          const _users = sortByMostBananas(state.users);
          return {
            ...state,
            users: _users,
            isSearching: false,
          };
        }

        return {
          ...state,
          isSearching: false,
        };
      }

    case actions.SET_INPUT:
      if (typeof action.payload === 'string') {
        return {
          ...state,
          searchInput: action.payload,
        };
      }

    case actions.SET_SORT_BY:
      if (isSortType(action.payload)) {
        return {
          ...state,
          sortBy: action.payload,
        };
      }

    case actions.SET_POPUP:
      if (typeof action.payload === 'boolean') {
        return {
          ...state,
          showPopUp: action.payload,
        };
      }

    case actions.SET_IS_SEARCHING:
      if (typeof action.payload === 'boolean') {
        return {
          ...state,
          isSearching: action.payload,
        };
      }

    case actions.SET_IS_SEARCH_COMPLETED:
      if (typeof action.payload === 'boolean') {
        return {
          ...state,
          isSearchCompleted: action.payload,
        };
      }

    case actions.SET_IS_FUZZY_SEARCH:
      if (typeof action.payload === 'boolean') {
        return {
          ...state,
          isFuzzySearch: action.payload,
        };
      }

    default:
      return state;
  }
};
