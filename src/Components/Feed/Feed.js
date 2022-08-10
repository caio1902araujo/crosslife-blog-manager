import React from 'react';
import PropTypes from 'prop-types';

import useFetch from '../../Hooks/useFetch';

import Article from '../Article/Article';
import Warning from '../Warning/Warning';
import ModalDelete from '../ModalDelete/ModalDelete';
import Loader from '../Loader/Loader';

import { NEWS_GET } from '../../Services/API';

import styles from './Feed.module.css';

const Feed = ({params}) => {
  const {data, error, loading, request} = useFetch();
  const [modalDelete, setModalDelete] = React.useState(false);
  const [changeFeed, setChangeFeed] = React.useState(0);

  React.useEffect(() => {
    let queryString = 'limit=12';
    const token = window.localStorage.getItem('token');

    if(params && Object.keys(params).length > 0){
      queryString = queryString + '&' + Object.keys(params).map(key => key + '=' + params[key]).join('&');
    }

    const {url, options} = NEWS_GET(token, queryString);
    request(url, options);
  }, [request, changeFeed, params]);

  if(error) return <Warning title='Erro ao carregar notícias' description={error}/>
  if(loading) return <Loader description="Carregando notícias"/>
  if(data){
    const [articles] = data;
    return (
      <section className={styles.feed}>
        {
          articles.map((article) => <Article key={article.id} news={article} setModalDelete={setModalDelete}/>)
        }
        {
          modalDelete && <ModalDelete setModalDelete={setModalDelete} newsData={modalDelete} setChangeFeed={setChangeFeed}/>
        }
      </section>
    )
  }
    
  else return null;
}

Feed.propTypes = {
  params: PropTypes.object,
}

export default Feed;
