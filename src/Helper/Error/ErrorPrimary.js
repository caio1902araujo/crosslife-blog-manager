import React from 'react';
import PropTypes from 'prop-types';

import styles from './Error.module.css';

const ErrorPrimary = ({error}) => {
  return (
    <p className={styles.errorPrimary}>{error}</p>
  )
}

ErrorPrimary.propTypes = {
  error: PropTypes.string,
}

export default ErrorPrimary;
