import React from 'react';
import PropTypes from 'prop-types';

const useCategory = (isRequired=true, valueDefaut="") => {

  const [value, setValue] = React.useState(valueDefaut);
  const [error, setError] = React.useState("");

  const validate = (value) => {
    if(isRequired === false) return true;
    if(value.length === 0){
      setError("Erro: Selecione um categoria antes de postar a notícia");
      return false;
    }
    else{
      setError(null);
      return true;
    }
  }

  const handleClick = ({target}) => {
    setValue(target.dataset.value);
    if(error !== "") setError("");
  }

  const checkActive = (category) => {
    return category === value ? "active" : ""
  }

  return {
    value,
    error,
    handleClick,
    checkActive,
    validate: () => validate(value),
  };
};

useCategory.propTypes = {
  isRequired: PropTypes.bool,
  valueDefaut: PropTypes.string
}

export default useCategory;
