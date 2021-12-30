import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

const ButtonSecondary = ({children, ...props}) => {
  return (
    <button {...props} className={`${styles.button} ${styles.buttonSecondary}`}>{children}</button>
  )
}

ButtonSecondary.propTypes = {
  children: PropTypes.any.isRequired,
}

export default ButtonSecondary
