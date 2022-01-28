import React from 'react';
import styles from './Select.module.css';
import useSelect from '../../Hooks/useSelect';
import SelectOptions from '../SelectOptions/SelectOptions';
import { ReactComponent as Arrow } from '../../Assets/arrow.svg';
import PropTypes from 'prop-types';

const Select = ({valueDefault, options}) => {
  const refSelectText = React.useRef(null);
  const refVisibilityControl = React.useRef(null);
  const {active, setActive, handleClick} = useSelect(valueDefault, options, refSelectText);

  return (
    <div className={styles.wrapper}>
      <div className={styles.select} onClick={()=> setActive(!active)} ref={refVisibilityControl}>
        <span className={styles.text} ref={refSelectText}> </span>
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
  valueDefault: PropTypes.string,
  options: PropTypes.array.isRequired,
}


export default Select;
