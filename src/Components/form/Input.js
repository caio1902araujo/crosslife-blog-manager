import React from 'react';
import styles from './Input.module.css';
import Error from '../../Helper/Error';

const Input = ({label, id, type, value, error, onChange, onBlur}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input type={type} id={id} name={id} className={styles.input} value={value} onChange={onChange} onBlur={onBlur}/>

      {error && <Error error={error} />}
    </div>
  )
}

export default Input
