import {createStoreHook} from 'react-redux';
import {createStore, combineReducers, Store} from 'redux';
import {userReducer} from './reducers';

const store: Store = createStore(userReducer);

export default store;
