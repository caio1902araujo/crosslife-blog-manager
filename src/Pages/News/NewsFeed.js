import React from 'react';
import { useNavigate } from 'react-router';

import { AuthContext } from '../../Hooks/useAuth';
import useScrollInfinite from '../../Hooks/useScrollInfinite';

import Alert from '../../Components/Alert/Alert';
import Feed from '../../Components/Feed/Feed';
import HeaderNews from '../../Components/HeaderNews/HeaderNews';
import Head from '../../Components/head/head';

const NewsFeed = () => {
  const navigate = useNavigate();
  const {pages, resetPage, setInfinite} = useScrollInfinite();
  const {alert} = React.useContext(AuthContext);
  const buttonSecondaryConfig = {
    content: 'Criar Notícia',
    onClick: () => {navigate('criar')}
  }

  return (
    <>
      <Head title='Home' description='home do gerenciador'/>
      <HeaderNews title='Suas Notícias' buttonSecondary={buttonSecondaryConfig}/>
      {
        pages.map((page) => <Feed key={page} page={page} resetPage={resetPage} setInfinite={setInfinite}/>)
      }
      {alert && <Alert message={alert.message} typeAlert={alert.typeAlert}/> }
    </>
  )
}

export default NewsFeed;
