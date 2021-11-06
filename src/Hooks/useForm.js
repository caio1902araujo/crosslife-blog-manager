import React from "react";

const useForm = () => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");

  const validate = (value) =>{
    if(value.length === 0){
      setError("Preencha esse campo");
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