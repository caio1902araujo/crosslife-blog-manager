import React from 'react';

import { AuthContext } from '../../Hooks/useAuth';
import useQueryParams from '../../Hooks/useQueryParams';
import useScrollInfinite from '../../Hooks/useScrollInfinite';

import Alert from '../../Components/Alert/Alert';
import Feed from '../../Components/Feed/Feed';
import Search from '../../Components/Search/Search';
import Filters from '../../Components/Filters/Filters';

const NewsSearch = () => {
  const {alert} = React.useContext(AuthContext);
  const {pages, setInfinite} = useScrollInfinite();
  const [queryParams, setQueryParams] = useQueryParams();

  return(
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <Search queryParams={queryParams} setQueryParams={setQueryParams} />
        <Filters queryParams={queryParams} setQueryParams={setQueryParams}/>
      </form>
      {
        pages.map((page) => (
          <Feed 
            key={page}
            page={page} 
            queryParams={queryParams}
            setInfinite={setInfinite}
          />
        ))
      }
      {alert && <Alert message={alert.message} typeAlert={alert.typeAlert}/> }
    </>
  );
};

export default NewsSearch;
