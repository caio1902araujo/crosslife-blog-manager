import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { AuthContext } from '../../Hooks/useAuth';

import Alert from '../../Components/Alert/Alert';
import Feed from '../../Components/Feed/Feed';
import Search from '../../Components/Search/Search';
import Filters from '../../Components/Filters/Filters';

const NewsSearch = () => {
  const {alert} = React.useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const params =  Object.fromEntries(searchParams.entries());

  return(
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <Search setSearchParams={setSearchParams} params={params}/>
        <Filters setSearchParams={setSearchParams} params={params}/>
      </form>
      <Feed params={params}/>
      {alert && <Alert message={alert.message} typeAlert={alert.typeAlert}/> }
    </>
  );
};

export default NewsSearch;
