import React from 'react';
import PropTypes from 'prop-types';

import SelectOptions from '../SelectOptions/SelectOptions';
import { ReactComponent as Arrow } from '../../Assets/arrow.svg';

import styles from './Select.module.css';

const Select = ({options, text, active, setActive, handleClick}) => {
  const refVisibilityControl = React.useRef(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.select} onClick={() => setActive(!active)} ref={refVisibilityControl}>
        <span className={styles.text}> {text} </span>
        <Arrow />
      </div>
      {
        active &&
        <SelectOptions options={options} handleClick={handleClick} setActive={setActive} refVisibilityControl={refVisibilityControl}/>
      }
    </div>
    
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default Select;
