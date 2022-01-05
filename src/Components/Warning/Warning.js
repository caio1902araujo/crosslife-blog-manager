import React from 'react';
import styles from './Warning.module.css';
import {ReactComponent as ErrorIcon} from '../../Assets/error.svg';

const Warning = () => {
  return (
    <section className={styles.wrapperWarning}>
      <div>
        <ErrorIcon />
      </div>
      
      <div className={styles.contentError}>
        <h2 className='subtitle'>Erro ao carregar notícias</h2>
        <p>Infelizmente tivemos problemas internos ao carregar as notícias, por favor tente novamente mais tarde</p>
      </div>
    </section>
  )
}

export default Warning
