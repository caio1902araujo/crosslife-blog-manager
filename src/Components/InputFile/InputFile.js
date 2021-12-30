import React from 'react';
import styles from './InputFile.module.css';
import PropTypes from 'prop-types';

const InputFile = ({refInputFile, ...props}) => {
  return (
    <input type="file" {...props} ref={refInputFile} className={styles.inputFile} />
  )
}

InputFile.propTypes = {
  refInputFile: PropTypes.object.isRequired,
}

export default InputFile
