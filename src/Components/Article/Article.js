import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Tooltip from '../Tooltip/Tooltip';
import MoreOptions from '../ListOptions/MoreOptions';
import {ReactComponent as Options} from '../../Assets/options.svg';

import timeInterval from '../../utils/timeInterval';

import styles from './Article.module.css';

const Article = ({news, setModalDelete}) => {
  const [active, setActive] = React.useState(false);
  const buttonVisibilityControlRef = React.useRef(null);
  const id = `listOptionsNews${news.id}`;

  const listItems = [
    {
      content: 'Editar',
      icon: 'edit',
      link: `/noticias/editar/${news.id}`
    },
    {
      content: 'Deletar',
      icon: 'remove',
      method: () => {
        setModalDelete(news);
        setActive(false);
      }
    }
  ];

  return (
    <article className={styles.article}>
      <button className={styles.moreOptions} aria-controls={id} onClick={() => {setActive(!active)}} ref={buttonVisibilityControlRef}>
        <Tooltip description='Mais Opções'>
          <Options />
        </Tooltip>
      </button>

      {
        active && 
        <MoreOptions id={id} listItems={listItems} setActive={setActive} buttonVisibilityControlRef={buttonVisibilityControlRef}/>
      }
      
      <Link to={`/noticias/editar/${news.id}`}> <h3 className={styles.aticleTitle}>{news.title}</h3> </Link>
      <p className={styles.aticleText}>postado {timeInterval(news.createdAt)}</p>
      <span className={styles.category}>{news.category}</span>
    </article>
  );
}

Article.propTypes = {
  news: PropTypes.object.isRequired,
  setModalDelete: PropTypes.func.isRequired,
}

export default Article;
