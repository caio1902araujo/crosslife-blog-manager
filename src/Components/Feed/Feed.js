import React from 'react';
import PropTypes from 'prop-types';

import useFetch from '../../Hooks/useFetch';

import Article from '../Article/Article';
import Warning from '../Warning/Warning';
import ModalDelete from '../ModalDelete/ModalDelete';
import Loader from '../Loader/Loader';

import { NEWS_GET } from '../../Services/API';

import styles from './Feed.module.css';

const Feed = ({page, queryParams, setInfinite}) => {
  const {data, error, loading, request} = useFetch();
  const [modalDelete, setModalDelete] = React.useState(false);
  const [changeFeed, setChangeFeed] = React.useState(0);

  React.useEffect(() => {

    (async () => {
      let queryString = `limit=9&offset=${(page - 1) * 9}`;
      const token = window.localStorage.getItem('token');

      if(queryParams && Object.keys(queryParams).length > 0){
        queryString = queryString + '&' + Object.keys(queryParams).map(key => key + '=' + queryParams[key]).join('&');
      }
      
      const {url, options} = NEWS_GET(token, queryString);
      const {response, json} = await request(url, options);

      const infinite = (response && response.ok && json[0].length < 9) ? false : true;
      setInfinite(infinite);
    })();

  }, [changeFeed, queryParams, page]);

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
  page: PropTypes.arrayOf(PropTypes.number).isRequired,
  setInfinite: PropTypes.func.isRequired,
  queryParams: PropTypes.object,
}

export default Feed;
