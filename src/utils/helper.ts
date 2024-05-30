import {SortType, UserType} from './types';

// Type guard function to check if payload is of type UserType[]
export const isUserTypeArray = (payload: any): payload is UserType[] => {
  return (
    Array.isArray(payload) &&
    payload.every(
      item =>
        typeof item === 'object' &&
        'uid' in item &&
        'name' in item &&
        'bananas' in item,
    )
  );
};

export const isUserType = (payload: any): payload is UserType => {
  return (
    typeof payload === 'object' &&
    'uid' in payload &&
    'name' in payload &&
    'bananas' in payload
  );
};

export const isSortType = (payload: any): payload is SortType => {
  return (
    typeof payload === 'string' &&
    (payload === 'name' || payload === 'lowest_ranked' || payload === '')
  );
};

// Helper functions
export const getTop10Users = (users: UserType[]): UserType[] => {
  // sort users with highest bananas
  const sortedUsers = [...users].sort((a, b) => b.bananas - a.bananas);
  return sortedUsers
    .slice(0, 10)
    .map((user, index) => ({...user, rank: getUserRank(sortedUsers, user)}));
};

export const getUserRank = (users: UserType[], user: UserType): number => {
  const userIndex = [...users]
    .sort((a, b) => b.bananas - a.bananas)
    .findIndex(u => u.uid === user.uid);
  return userIndex >= 0 ? userIndex + 1 : -1; // Add 1 to convert index to rank, or return -1 if not found
};

export const isUserInTop10List = (
  users: UserType[],
  searchedUser: UserType,
) => {
  if (users.some(user => matchIds(user, searchedUser))) {
    return true;
  }
  return false;
};

const matchIds = (user1: UserType, user2: UserType): boolean => {
  return user1.uid === user2.uid;
};
export const replaceSearchedUserWithLastRankedUser = (
  top10Users: UserType[],
  searchedUser: UserType,
  rank: number,
): UserType[] => {
  const updatedTop10 = [...top10Users];
  updatedTop10[9] = {...searchedUser, rank: rank};

  return updatedTop10;
};

export const sortByLowestRank = (users: UserType[]): UserType[] => {
  const _users = users.sort((a, b) => {
    return b.rank - a.rank || a.name.localeCompare(b.name);
  });

  return _users;
};

export const sortByHighestRank = (users: UserType[]): UserType[] => {
  const _users = users.sort((a, b) => {
    return a.rank - b.rank || a.name.localeCompare(b.name);
  });

  return _users;
};

export const sortByName = (users: UserType[]): UserType[] => {
  const _users = users.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  return _users;
};
