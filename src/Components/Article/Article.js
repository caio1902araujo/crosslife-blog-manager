import React from 'react'
import styles from './Article.module.css'

const Article = ({key, news}) => {
  const convertDate = (dateAmericanFormat, format) => {
    const date = new Date(dateAmericanFormat);
    return date.toLocaleDateString(format)
  }

  console.log(key);
  return (
    <article className={styles.article}>
      <h3 className={styles.aticleTitle}>{news.titulo}</h3>
      <p className={styles.aticleText}>postado em <span className={styles.date}>{convertDate(news.data_criacao, 'pt-BR')}</span></p>
      <span className={styles.category}>{news.categoria}</span>
    </article>
  );
}

export default Article
