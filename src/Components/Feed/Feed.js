import React from 'react'
import styles from './Feed.module.css'
import useFetch from '../../Hooks/useFetch'
import { NEWS_GET } from '../../Services/API';
import Article from '../Article/Article';
import Warning from '../Warning/Warning';
import ModalDelete from '../ModalDelete/ModalDelete';
// import PropTypes from 'prop-types';

const Feed = () => {
  const {data, error, loading, request} = useFetch();
  const [modalDelete, setModalDelete] = React.useState(false);
  const [changeFeed, setChangeFeed] = React.useState(0)

  React.useEffect(() => {
    const {url, options} = NEWS_GET();
    request(url, options);
  }, [request, changeFeed]);

  if(error) return <Warning />
  if(loading) return <p>Carregando...</p>
  if(data)
    return (
      <section className={styles.feed}>
        {
          data.map((news) => <Article key={news.id} news={news} setModalDelete={setModalDelete}/>)
        }
        {
          modalDelete && <ModalDelete setModalDelete={setModalDelete} newsData={modalDelete} setChangeFeed={setChangeFeed}/>
        }
      </section>
    )
  else return null
}

// Feed.propTypes = {
//   setModalDelete: PropTypes.func.isRequired,
// }

export default Feed
