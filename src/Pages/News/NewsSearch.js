import React from 'react';

import { AuthContext } from '../../Hooks/useAuth';
import useQueryParams from '../../Hooks/useQueryParams';
import useScrollInfinite from '../../Hooks/useScrollInfinite';

import Alert from '../../Components/Alert/Alert';
import Feed from '../../Components/Feed/Feed';
import Search from '../../Components/Search/Search';
import Filters from '../../Components/Filters/Filters';
import Head from '../../Components/head/head';

const NewsSearch = () => {
  const {alert} = React.useContext(AuthContext);
  const {pages, resetPage, setInfinite} = useScrollInfinite();
  const [queryParams, setQueryParams] = useQueryParams();

  return(
    <>
      <Head title='Pesquisar' description='página para pesquisar e filtrar notícias'/>

      <form onSubmit={(event) => event.preventDefault()}>
        <Search queryParams={queryParams} setQueryParams={setQueryParams} />
        <Filters queryParams={queryParams} setQueryParams={setQueryParams}/>
      </form>

      {
        pages.map((page) => (
          <Feed 
            key={page}
            page={page}
            resetPage={resetPage}
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
