import React from 'react';
import PropTypes from 'prop-types';

const useSelect = (valueDefault="", options) => {
  const [active, setActive] = React.useState(false);
  const [value, setValue] = React.useState(valueDefault);
  const [text, setText] = React.useState(()=>{
    const { text } = options.find(option => option.value === valueDefault);
    return text;
  });
  
  const handleClick = ({target}) => {
    setValue(target.dataset.value);
    setText(target.textContent);
    setActive(false);
  }

  return {
    value,
    text,
    active,
    setActive,
    handleClick,
  };
};

useSelect.propTypes = {
  valueDefaut: PropTypes.string,
  options: PropTypes.array.isRequired,
}

export default useSelect;
