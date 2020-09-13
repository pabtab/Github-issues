import { createReducer } from '@reduxjs/toolkit';
import { fetchIssues } from '../actions';
import { handleActionStart, handleActionError } from '../../../utils/actionUtils';

const initialState = {
  data: [],
};

export default createReducer(initialState, {
  [fetchIssues.pending]: handleActionStart,
  [fetchIssues.fulfilled]: (state, action) => {
    state.data = action.payload
    state.isLoading = false
  },
  [fetchIssues.rejected]: handleActionError,
});
