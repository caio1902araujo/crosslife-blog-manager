import React from 'react';
import styles from './Loader.module.css';
import PropTypes from 'prop-types';

const Loader = ({description}) => {
  return (
    <div className={styles.wrapperLoader}>
      <div className={styles.loader}></div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

Loader.propTypes = {
  description: PropTypes.string.isRequired,
}


export default Loader
