import React from 'react';
import styles from './SelectOptions.module.css';
import useOutsideClick from '../../Hooks/useOutsideClick';
import PropTypes from 'prop-types';

const SelectOptions = ({options, handleClick, setActive, refVisibilityControl}) => {
  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, setActive, refVisibilityControl);

  return (
    <ul className={`animeHeight ${styles.options}`} ref={wrapperRef} onClick={handleClick}>
      {options.map((options)=> <li key={options.value} data-value={options.value}>{options.text}</li>)}
    </ul>
  );
};

SelectOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
  refVisibilityControl: PropTypes.object.isRequired,
}

export default SelectOptions;
