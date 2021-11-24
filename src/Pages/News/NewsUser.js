import React from 'react'
import Article from '../../Components/Article/Article'
import HeaderNews from '../../Components/HeaderNews/HeaderNews'

const NewsUser = () => {
  return (
    <section>
      <HeaderNews title="Suas Noticias" buttonSecondary="Criar Notícia"/>
      <Article/>
    </section>
  )
}

export default NewsUser
