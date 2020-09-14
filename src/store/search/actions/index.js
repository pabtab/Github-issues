import { createAction } from '@reduxjs/toolkit';

export const searchIssue = createAction('SEARCH/RESULT', (value, data) => {
  const cleanWord = value.trim().toLowerCase();
  const wordLength = cleanWord.length;
  const result = data.filter(
    (issue) => issue.title.toLowerCase().slice(0, wordLength) === cleanWord
  );

  return {
    payload: {
      result,
      value,
    },
  };
});

export const selectResultItem = createAction(
  'SEARCH/SELECT-RESULT',
  (selection) => {
    return {
      payload: selection
    }
  }
);
