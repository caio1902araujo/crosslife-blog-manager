import React from 'react';
import styles from './Error.module.css';
import PropTypes from 'prop-types';

const ErrorPrimary = ({error}) => {
  return (
    <p className={styles.errorPrimary}>{error}</p>
  )
}

ErrorPrimary.propTypes = {
  error: PropTypes.string,
}

export default ErrorPrimary
