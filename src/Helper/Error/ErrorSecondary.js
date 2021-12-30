import React from 'react';
import styles from './Error.module.css';
import PropTypes from 'prop-types';

const ErrorSecondary = ({error}) => {
  return (
    <p className={styles.errorSecondary}>{error}</p>
  )
}

ErrorSecondary.propTypes = {
  error: PropTypes.string,
}

export default ErrorSecondary
