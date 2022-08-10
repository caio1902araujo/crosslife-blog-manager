import React from 'react';
import { useNavigate } from 'react-router';

import { AuthContext } from '../../Hooks/useAuth';

import Alert from '../../Components/Alert/Alert';
import Feed from '../../Components/Feed/Feed';
import HeaderNews from '../../Components/HeaderNews/HeaderNews';

const NewsFeed = () => {
  const navigate = useNavigate();
  const {alert} = React.useContext(AuthContext);
  const buttonSecondaryConfig = {
    content: "Criar Notícia",
    onClick: () => {navigate("criar")}
  }

  return (
    <>
      <HeaderNews title="Suas Notícias" buttonSecondary={buttonSecondaryConfig}/>
      <Feed/>
      {alert && <Alert message={alert.message} typeAlert={alert.typeAlert}/> }
    </>
  )
}

export default NewsFeed;
