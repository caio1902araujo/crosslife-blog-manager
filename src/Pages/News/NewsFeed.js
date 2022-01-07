import React from 'react';
import { useNavigate } from 'react-router';
import Feed from '../../Components/Feed/Feed';
import HeaderNews from '../../Components/HeaderNews/HeaderNews';

const NewsFeed = () => {
  const navigate = useNavigate();
  const buttonSecondaryConfig = {
    content: "Criar Notícia",
    onClick: () => {navigate("criar")}
  }

  return (
    <>
      <HeaderNews title="Suas Notícias" buttonSecondary={buttonSecondaryConfig}/>
      <Feed/>
    </>
  )
}

export default NewsFeed;