import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Segment } from 'semantic-ui-react';
import { fetchIssues } from '../../store/issues/actions';
import { searchIssue, selectResultItem } from '../../store/search/actions';
import { getResult, getIssues } from '../../store/selectors';
import { SearchAutocomplete } from '../../Molecules/SearchAutocomplete';

import './styles.css';

const Home = () => {
  const dispatch = useDispatch();
  const { value, result } = useSelector(getResult);
  const results = useSelector(getIssues);
  console.log(results);

  useEffect(() => {
    dispatch(fetchIssues());
  }, []);

  const handleSearchChange = React.useCallback(
    (e, { value }) => {
      dispatch(searchIssue(value, results));
    },
    [results]
  );

  const selectResult = (
    e: React.FormEventHandler<HTMLInputElement>,
    data: Object
  ) => {
    console.log(data);
    //dispatch(selectResultItem(data))
  };

  return (
    <Container className="Home">
      <Segment raised className="box">
        <h1>Search Issues React</h1>
        <SearchAutocomplete
          results={result}
          handleSearchChange={handleSearchChange}
          value={value}
          selectResult={selectResult}
        />
      </Segment>
    </Container>
  );
};

export default Home;
