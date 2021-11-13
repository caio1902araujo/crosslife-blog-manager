import React from 'react';
import styles from './Input.module.css';
import ErrorPrimary from '../../Helper/Error/ErrorPrimary';

const Input = ({label, id, type, value, error, onChange, onBlur}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <input type={type} id={id} name={id} className={styles.input} value={value} onChange={onChange} onBlur={onBlur}/>

      <ErrorPrimary error={error}/>
    </div>
  )
}

export default Input
