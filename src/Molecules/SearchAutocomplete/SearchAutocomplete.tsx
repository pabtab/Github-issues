import React, { useState } from 'react';
import { Search } from 'semantic-ui-react';
import { Input } from '../../Atoms/Input';
import './styles.css';

type SearchProps = {
  results: Array<Object>;
  handleSearchChange: any
  selectResult: any,
  value: string
};

const SearchAutocomplete = ({ results, handleSearchChange, selectResult, value }: SearchProps) => {
  return (
    <Search
      className="search--autocomplete"
      onResultSelect={selectResult}
      onSearchChange={handleSearchChange}
      results={results}
      value={value}
    />
  );
};

export default SearchAutocomplete;
