import React from 'react';
import styles from './Input.module.css';
import ErrorPrimary from '../../Helper/Error/ErrorPrimary';
import PropTypes from 'prop-types';

const Input = ({label, id, type, isBox, onInput, error, value, onChange, onBlur}) => {
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
          onInput={onInput} 
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
  onInput: PropTypes.func,
}

export default Input
