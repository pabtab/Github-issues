import { createReducer } from '@reduxjs/toolkit';
import { searchIssue, selectResultItem } from '../actions';

const initialState = {
  result: [],
  value: '',
};

export default createReducer(initialState, {
  [searchIssue]: (state, action) => {
    state.result = action.payload.result
    state.value = action.payload.value
  },
  [selectResultItem]: (state, action) => {
    state.value = action.payload
  }
});
