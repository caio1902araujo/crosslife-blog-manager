import React from 'react';
import styles from './Input.module.css';

const Input = ({label, id, type}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input type={type} id={id} name={id} className={styles.input}/>
    </div>
  )
}

export default Input
