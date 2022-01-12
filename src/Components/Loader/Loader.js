import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.wrapperLoader}>
      <div className={styles.loader}></div>
      <p className={styles.description}>Carregando noticias</p>
    </div>
  )
}

export default Loader
