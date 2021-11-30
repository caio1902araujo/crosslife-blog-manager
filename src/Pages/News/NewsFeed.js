import React from 'react';
import Feed from '../../Components/Feed/Feed';
import HeaderNews from '../../Components/HeaderNews/HeaderNews';

const NewsFeed = () => {
  return (
    <section>
      <HeaderNews title="Suas Noticias" buttonSecondary="Criar Notícia"/>
      <Feed/>
    </section>
  )
}

export default NewsFeed
