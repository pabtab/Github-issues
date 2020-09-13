import React, { useState } from 'react';
import { Search } from 'semantic-ui-react';

import { ListItem } from '../ListItem';

import './styles.css';

type SearchProps = {
  results: Array<Object>;
  handleSearchChange: any;
  selectResult: any;
  value: string;
};

const SearchAutocomplete = ({
  results,
  handleSearchChange,
  selectResult,
  value,
}: SearchProps) => {

  const renderItem = ({title}) => <ListItem  />

  return (
    <Search
      className="search--autocomplete"
      onResultSelect={selectResult}
      onSearchChange={handleSearchChange}
      results={results}
      value={value}
      resultRenderer={renderItem}
    />
  );
};

export default SearchAutocomplete;
