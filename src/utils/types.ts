export type RootStackParamList = {
  Home: undefined;
};

export type UserType = {
  bananas: number;
  lastDayPlayed: string;
  longestStreak: number;
  name: string;
  stars: number;
  subscribed: boolean;
  uid: string;
  rank: number;
};

export type UserTypeExtended = UserType & {
  rank: number;
};

export interface SearchUserAction {
  type: string;
  payload: UserType[];
}

export interface SortUsersAction {
  type: string;
  payload: SortType;
}

export interface SetIsSearching {
  type: string;
  payload: boolean;
}

export interface SetSearchInput {
  type: string;
  payload: string;
}

export interface SetSortBy {
  type: string;
  payload: string;
}

export interface SetPopUp {
  type: string;
  payload: boolean;
}

export interface SetIsSearchCompleted {
  type: string;
  payload: boolean;
}
export interface SetIsFuzzySearch {
  type: string;
  payload: boolean;
}

export type UserAction =
  | SearchUserAction
  | SortUsersAction
  | SetIsSearching
  | SetSearchInput
  | SetSortBy
  | SetPopUp
  | SetIsSearchCompleted;

export type StoreState = {
  users: UserType[];
  searchInput: string;
  searchedUser: UserType | undefined;
  isSearchCompleted: boolean;
  isSearching: boolean;
  isFuzzySearch: boolean;
  sortBy: SortType;
  showPopUp: boolean;
};

export type SortType = 'name' | 'lowest_ranked' | '';
