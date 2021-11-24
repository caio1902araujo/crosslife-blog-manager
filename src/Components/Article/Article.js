import React from 'react'
import styles from './Article.module.css'

const Article = () => {
  return (
    <article className={styles.article}>
      <h3 className={styles.aticleTitle}>Afinal whey ou chimarrão</h3>
      <p className={styles.aticleText}>por <span className={styles.name}>Yudi Yoshimine</span> há 4 horas</p>
      <span className={styles.category}>saúde</span>
    </article>
  )
}

export default Article
