import React from 'react';
import PropTypes from 'prop-types';

import styles from './Error.module.css';

const ErrorSecondary = ({error}) => {
  return (
    <p className={styles.errorSecondary}>{error}</p>
  )
}

ErrorSecondary.propTypes = {
  error: PropTypes.string,
}

export default ErrorSecondary;
