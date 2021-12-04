import React from "react";

const useForm = (title, isRequired) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  const validate = (value) =>{
    if(isRequired === false) return true
    if(value.length === 0){
      setError("Preencha esse campo");
      return false;
    }
    else if(title && value !== title){
      setError("Valor não corresponde com o título da notícia");
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

export default useForm