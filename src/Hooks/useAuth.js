import React from "react";
import { useNavigate } from "react-router";
import { SIGN_IN, SIGN_OUT } from "../Services/API";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [login, setLogin] = React.useState(false);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const signOut = async () => {
    setLogin(false);
    setLoading(false);
    setError(false);
    const token = localStorage.getItem("token");
    const {url, options} = SIGN_OUT(token);
    await fetch(url, options);
    localStorage.removeItem("token");
    navigate("/");
  }

  const signIn = async (username, password) => {
    try{
      setError(null);
      setLoading(true);
      const {url, options} = SIGN_IN({usuario: username, hash: password});
      const response = await fetch(url, options);
      if(!response.ok) throw new Error('Erro: credenciais inválidas');
      const {Token} = await response.json();
      window.localStorage.setItem('token', Token);
      setLogin(true);
      navigate("/noticias")
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
    <AuthContext.Provider value={{signIn, signOut, login, loading, error}}>
      {children}
    </AuthContext.Provider>
  )
}