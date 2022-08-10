import React from 'react';
import PropTypes from 'prop-types';

import styles from './InputFile.module.css';

const InputFile = ({refInputFile, ...props}) => {
  return (
    <input type='file' {...props} ref={refInputFile} className={styles.inputFile} />
  )
}

InputFile.propTypes = {
  refInputFile: PropTypes.object.isRequired,
}

export default InputFile;
