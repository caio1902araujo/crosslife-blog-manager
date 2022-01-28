import React from 'react';
import PropTypes from 'prop-types';

const useSelect = (valueDefault="", options, refSelectText) => {
  const [active, setActive] = React.useState(false);
  const [select, setSelect] = React.useState(valueDefault);

  React.useEffect(()=>{
    const { text } = options.find(option => option.value === valueDefault);
    refSelectText.current.textContent = text;
  }, [options, valueDefault, refSelectText]);

  const handleClick = ({target}) => {
    setSelect(target.dataset.value);
    refSelectText.current.textContent = target.textContent;
    setActive(false);
  }

  return {
    select,
    active,
    setActive,
    handleClick,
  };
};

useSelect.propTypes = {
  valueDefaut: PropTypes.string,
  options: PropTypes.array.isRequired,
  refSelectText: PropTypes.object.isRequired,
}

export default useSelect;
