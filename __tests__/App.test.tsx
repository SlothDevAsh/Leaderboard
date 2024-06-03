import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {SortType, StoreState, UserType} from '@utils/types';
import {actions} from '@store/actions';
import {initialState, reducer} from '@store/reducers';

const mockUsers: UserType[] = [
  {
    bananas: 200,
    lastDayPlayed: '2018-11-22',
    longestStreak: 1,
    name: 'Rica Ella Francisco',
    stars: 6,
    subscribed: false,
    uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
    rank: 1,
  },
  {
    bananas: 0,
    lastDayPlayed: '2017-11-01',
    longestStreak: 0,
    name: 'Adh Fuoo',
    stars: 4,
    subscribed: false,
    uid: 'x8RNvUgv5pZqDVatEXb2aYgSflq1',
    rank: 2,
  },
  {
    bananas: 150,
    lastDayPlayed: '2018-10-17',
    longestStreak: 1,
    name: 'Emma',
    stars: 4,
    subscribed: false,
    uid: 'ylL3XqPOlycHiPBuf1uXHlgZzEr2',
    rank: 3,
  },
];

describe('Reducer Tests', () => {
  it('should handle SEARCH_USERS action with searched user not found', () => {
    const action = {
      type: actions.SEARCH_USERS,
      payload: mockUsers,
    };

    const mockState: StoreState = {
      ...initialState,
      users: [],
      searchInput: 'Alice',
      sortBy: '',
      isFuzzySearch: false,
      searchedUser: undefined,
    };

    const newState = reducer(mockState, action);

    // the searched user is expected to be undefined
    expect(newState.searchedUser).toBeUndefined();

    // list of users are expected to be empty array
    expect(newState.users).toEqual([]);
  });

  it('should handle SEARCH_USERS action with searched user found', () => {
    const mockInput = 'Emma';
    const action = {
      type: actions.SEARCH_USERS,
      payload: mockUsers,
    };

    const mockState: StoreState = {
      ...initialState,
      users: mockUsers,
      searchInput: mockInput,
      sortBy: '',
      isFuzzySearch: false,
      searchedUser: mockUsers[2],
    };

    const newState = reducer(mockState, action);

    const expectedUser = mockUsers.find(user => user.name === mockInput);

    expect(mockState.users).toContain(expectedUser);

    expect(newState.searchedUser).toEqual(expectedUser);
  });

  it('should handle SEARCH_USERS action with fuzzy search enabled', () => {
    const mockInput = 'A';
    const action = {
      type: actions.SEARCH_USERS,
      payload: mockUsers,
    };

    const mockState: StoreState = {
      ...initialState,
      users: mockUsers,
      searchInput: mockInput,
      sortBy: '',
      isFuzzySearch: true,
      searchedUser: undefined,
    };

    const newState = reducer(mockState, action);

    const expectedUsers = mockUsers.filter(user =>
      user.name.toLowerCase().includes(mockInput.toLowerCase()),
    );

    expect(mockUsers).toEqual(expectedUsers);

    expect(newState.searchedUser).toEqual(undefined);
    expect(newState.isFuzzySearch).toBeTruthy();
  });

  it('should handle SORT_USERS action for name based sorting', () => {
    const action = {
      type: actions.SORT_USERS,
      payload: 'name',
    };

    const stateWithUsers: StoreState = {
      ...initialState,
      users: mockUsers,
      isSearching: false,
      isSearchCompleted: true,
    };

    const newState = reducer(stateWithUsers, action);

    // Assuming sorting by name in alphabetical order
    const sortedNames = mockUsers
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(user => user.name);
    const newStateNames = newState.users.map(user => user.name);

    expect(newStateNames).toEqual(sortedNames);
    expect(newState.isSearching).toBeFalsy();
    expect(newState.isSearchCompleted).toBeTruthy();
  });

  it('should handle SORT_USERS action for lowest ranking based sorting', () => {
    const action = {
      type: actions.SORT_USERS,
      payload: 'lowest_ranked',
    };

    const stateWithUsers: StoreState = {
      ...initialState,
      users: mockUsers,
      isSearching: false,
      isSearchCompleted: true,
    };

    const newState = reducer(stateWithUsers, action);

    // Assuming sorting by name in alphabetical order
    const lowestRanks = mockUsers
      .sort((a, b) => b.rank - a.rank)
      .map(user => user.rank);

    const newStateRanks = newState.users.map(user => user.rank);

    expect(newStateRanks).toEqual(lowestRanks);
    expect(newState.isSearching).toBeFalsy();
    expect(newState.isSearchCompleted).toBeTruthy();
  });

  it('should handle SET_INPUT action', () => {
    const mockInput = 'Emma';
    const action = {
      type: actions.SET_INPUT,
      payload: mockInput,
    };

    const state: StoreState = {
      ...initialState,
      searchInput: mockInput,
    };

    const newState = reducer(state, action);

    expect(newState.searchInput).toEqual(mockInput);
  });
  it('should handle SET_SORT_BY action', () => {
    const mockSortBy: SortType = 'name';
    const action = {
      type: actions.SET_SORT_BY,
      payload: mockSortBy,
    };

    const state: StoreState = {
      ...initialState,
      sortBy: mockSortBy,
    };

    const newState = reducer(state, action);

    expect(newState.sortBy).toEqual(mockSortBy);
  });

  it('should handle SET_POPUP action', () => {
    const action = {
      type: actions.SET_POPUP,
      payload: true,
    };

    const state: StoreState = {
      ...initialState,
      showPopUp: true,
    };

    const newState = reducer(state, action);

    expect(newState.showPopUp).toBeTruthy();
  });

  it('should handle SET_IS_SEARCHING action', () => {
    const action = {
      type: actions.SET_IS_SEARCHING,
      payload: true,
    };

    const state: StoreState = {
      ...initialState,
      isSearching: true,
    };

    const newState = reducer(state, action);

    expect(newState.isSearching).toBeTruthy();
  });

  it('should handle SET_IS_SEARCH_COMPLETED action', () => {
    const action = {
      type: actions.SET_IS_SEARCH_COMPLETED,
      payload: true,
    };

    const state: StoreState = {
      ...initialState,
      isSearchCompleted: true,
    };

    const newState = reducer(state, action);
    expect(newState.isSearchCompleted).toBeTruthy();
  });

  it('should handle SET_IS_FUZZY_SEARCH action', () => {
    const action = {
      type: actions.SET_IS_FUZZY_SEARCH,
      payload: true,
    };

    const state: StoreState = {
      ...initialState,
      isFuzzySearch: true,
    };

    const newState = reducer(state, action);

    expect(newState.isFuzzySearch).toBeTruthy();
  });
});
