import React from 'react'
import styles from './Article.module.css';
import MoreOptions from '../ListOptions/MoreOptions';
import { Link } from 'react-router-dom';
import {ReactComponent as Options} from '../../Assets/options.svg';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip/Tooltip';

const Article = ({news, setModalDelete}) => {
  const [active, setActive] = React.useState(false);
  const buttonVisibilityControlRef = React.useRef(null);
  const id = `listOptionsNews${news.id}`;

  const convertDate = (dateAmericanFormat, format) => {
    const date = new Date(dateAmericanFormat+"T00:00:00");
    return date.toLocaleDateString(format);
  }

  const listItems = [
    {
      content: "Editar",
      icon: 'edit',
      link: `editar/${news.id}`
    },
    {
      content: "Deletar",
      icon: 'remove',
      method: () => {
        setModalDelete(news);
        setActive(false);
      }
    }
  ]

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
      
      <Link to={`editar/${news.id}`}> <h3 className={styles.aticleTitle}>{news.titulo}</h3> </Link>
      <p className={styles.aticleText}>postado em <span className={styles.date}>{convertDate(news.data_criacao, 'pt-BR')}</span></p>
      <span className={styles.category}>{news.categoria}</span>
    </article>
  );
}

Article.propTypes = {
  news: PropTypes.object.isRequired,
  setModalDelete: PropTypes.func.isRequired,
}

export default Article
