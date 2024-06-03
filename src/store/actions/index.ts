import {
  SetIsFuzzySearch,
  SetIsSearchCompleted,
  SetPopUp,
  SetSortBy,
  SortType,
  UserType,
} from '@utils/types';
import {
  SearchUserAction,
  SetIsSearching,
  SetSearchInput,
  SortUsersAction,
} from '@utils/types';

export const actions = {
  SEARCH_USERS: 'SEARCH_USERS',
  SORT_USERS: 'SORT_USERS',
  SET_IS_SEARCHING: 'SET_IS_SEARCHING',
  SET_IS_SEARCH_COMPLETED: 'SET_IS_SEARCH_COMPLETED',
  SET_IS_FUZZY_SEARCH: 'SET_IS_FUZZY_SEARCH',
  SET_INPUT: 'SET_INPUT',
  SET_SORT_BY: 'SET_SORT_BY',
  SET_POPUP: 'SET_POPUP',
};

export const searchUser = (): SearchUserAction => {
  const users: UserType[] = Object.values(require('@data/leaderboard.json'));

  return {
    type: actions.SEARCH_USERS,
    payload: users,
  };
};

export const setIsSearching = (loading: boolean): SetIsSearching => ({
  type: actions.SET_IS_SEARCHING,
  payload: loading,
});

export const setIsSearchCompleted = (value: boolean): SetIsSearchCompleted => ({
  type: actions.SET_IS_SEARCH_COMPLETED,
  payload: value,
});

export const setIsFuzzySearch = (value: boolean): SetIsFuzzySearch => ({
  type: actions.SET_IS_FUZZY_SEARCH,
  payload: value,
});

export const setInput = (value: string): SetSearchInput => {
  return {
    type: actions.SET_INPUT,
    payload: value,
  };
};

export const setSortBy = (value: SortType): SetSortBy => {
  return {
    type: actions.SET_SORT_BY,
    payload: value,
  };
};

export const setPopUp = (value: boolean): SetPopUp => ({
  type: actions.SET_POPUP,
  payload: value,
});

export const sortUsers = (value: SortType): SortUsersAction => ({
  type: actions.SORT_USERS,
  payload: value,
});
