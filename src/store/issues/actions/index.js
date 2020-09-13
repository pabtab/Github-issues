import searchIssues from '../../../api';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchIssues = createAsyncThunk(
  'ISSUES/FETCH_ISSUES',
  async () => {
    const response = await searchIssues();
    return response;
  }
);
