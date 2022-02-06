import React from 'react';
import { AuthContext } from '../../Hooks/useAuth';
import Alert from '../../Components/Alert/Alert';
import Feed from '../../Components/Feed/Feed';
import Search from '../../Components/Search/Search';
import Filters from '../../Components/Filters/Filters';

const NewsSearch = () => {
  const {alert} = React.useContext(AuthContext);

  return(
    <>
      <form onSubmit={(event) => event.preventDefault()}>
        <Search />
        <Filters />
      </form>
      <Feed />
      {alert && <Alert message={alert.message} typeAlert={alert.typeAlert}/> }
    </>
  );
};

export default NewsSearch;
