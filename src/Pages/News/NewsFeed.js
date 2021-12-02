import React from 'react';
import Feed from '../../Components/Feed/Feed';
import HeaderNews from '../../Components/HeaderNews/HeaderNews';
import ModalDelete from '../../Components/ModalDelete/ModalDelete';

const NewsFeed = () => {
  const [modalDelete, setModalDelete] = React.useState(false);

  return (
    <section>
      <HeaderNews title="Suas Noticias" buttonSecondary="Criar Notícia"/>
      <Feed setModalDelete={setModalDelete}/>
      {
        modalDelete && <ModalDelete setModalDelete={setModalDelete} modalDelete={modalDelete}/>
      }
    </section>
  )
}

export default NewsFeed;
