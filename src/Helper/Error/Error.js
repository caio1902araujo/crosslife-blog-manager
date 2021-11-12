import React from 'react';
import styles from './Error.module.css';

const Error = ({error, errorStyle}) => {
  return (
    <p className={styles[errorStyle]}>{error}</p>
  )
}

export default Error
