import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback( async (url, options) => {
    let response;
    let json;

    try{
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      
      if(response.ok === false) {
        
        throw new Error(json.message)
      }
    }
    catch(e){
      json = null;
      
      if (e instanceof TypeError) {
        setError('Você esta sem internet, verifique sua conexão e tente novamente');
      } 
      if(e instanceof SyntaxError){
        setError('Não foi possível completar a operação, tente novamente mais tarde');
      }
      else{
        setError(e.message);
      }
    }
    finally{
      setData(json);
      setLoading(false);
      return {response, json};
    }
  }, []);

  return {
    data,
    error,
    loading,
    request
  }

}

export default useFetch;
