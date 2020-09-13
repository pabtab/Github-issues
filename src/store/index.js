import { configureStore, combineReducers } from '@reduxjs/toolkit';
import search from './search/reducers';
import issues from './issues/reducers'

const rootReducer = combineReducers({
  search,
  issues
})

const store = configureStore({
  reducer: rootReducer,
});

export default store;
