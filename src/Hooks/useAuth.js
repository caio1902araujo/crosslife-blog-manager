import React from "react";
// import { useNavigate } from "react-router";
import { TOKEN_POST } from "../Services/API";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);

  const signIn = async (username, password) => {
    try{
      setError(null);
      setLoading(true);
      const {url, options} = TOKEN_POST({usuario: username, hash: password});
      const response = await fetch(url, options);
      if(!response.ok) throw new Error('Erro: credenciais inválidas');
      const {Token} = await response.json();
      window.localStorage.setItem('token', Token);
      setLogin(true);
    }
    catch(err){
      setError(err.message);
      setLogin(false);
    }
    finally{
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{signIn, login, loading, error}}>
      {children}
    </AuthContext.Provider>
  )
}