import React from 'react';
import PropTypes from 'prop-types';

const useSelect = (valueDefault="", options) => {
  const [active, setActive] = React.useState(false);
  const [selectText, setSelectText] = React.useState(()=>{
    const { text } = options.find(option => option.value === valueDefault);
    return text;
  });
  const [selectValue, setSelectValue] = React.useState(valueDefault);

  const handleClick = ({target}) => {
    setSelectValue(target.dataset.value);
    setSelectText(target.textContent);
    setActive(false);
  }

  return {
    selectValue,
    selectText,
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
