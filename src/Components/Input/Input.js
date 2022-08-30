import React from 'react';
import PropTypes from 'prop-types';

import ErrorPrimary from '../../Helper/Error/ErrorPrimary';

import styles from './Input.module.css';

const Input = ({label, id, type, isBox, error, value, onChange, onBlur}) => {
  return (
    <div className={styles.wrapper}>
      {
        label &&
        <label htmlFor={id} className={styles.label}>{label}</label>
      }

      {
        isBox ?
        <textarea type={type} 
          id={id} 
          name={id} 
          className={styles.textarea} 
          value={value} 
          onChange={onChange}
          onBlur={onBlur}
        ></textarea> :
        <input type={type} 
          id={id} 
          name={id} 
          className={styles.input}
          value={value} 
          onChange={onChange}
          onBlur={onBlur}
        />
      }

      {error && <ErrorPrimary error={error}/>}
    </div>
  )
}

Input.defaultProps = {
  isBox: false
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  isBox: PropTypes.bool,
  value:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default Input;
