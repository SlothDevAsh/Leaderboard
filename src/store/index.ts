import {createStoreHook} from 'react-redux';
import {createStore, combineReducers, Store} from 'redux';

const rootReducer = combineReducers<{
  searchedData: [];
}>({
  searchedData: [],
});

const store: Store = createStore(rootReducer);

export default store;
