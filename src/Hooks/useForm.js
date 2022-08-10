import React from 'react';
import PropTypes from 'prop-types';

const useForm = (isRequired=true, valueDefaut='', title) => {
  const [value, setValue] = React.useState(valueDefaut);
  const [error, setError] = React.useState('');

  const validate = (value) =>{
    if(isRequired === false) return true
    if(value.length === 0){
      setError('Preencha esse campo');
      return false;
    }
    else if(title && value !== title){
      setError('Valor não corresponde com o título da notícia');
      return false;
    }
    else{
      setError(null);
      return true;
    }
  }

  const onChange = ({target}) =>{
    if(error){
      validate(target.value);
    }
    setValue(target.value);
  }

  return {
    value,
    error,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

useForm.propTypes = {
  isRequired: PropTypes.bool,
  valueDefaut: PropTypes.string,
  title: PropTypes.string,
}

export default useForm;
