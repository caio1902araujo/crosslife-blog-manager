import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

const ButtonPrimary = ({children, ...props}) => {
  return (
    <button {...props} className={`${styles.button} ${styles.buttonPrimary}`}>{children}</button>
  )
}

ButtonPrimary.propTypes = {
  children: PropTypes.any.isRequired,
}

export default ButtonPrimary;
