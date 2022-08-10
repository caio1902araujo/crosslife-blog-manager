import React from 'react';
import { useNavigate } from 'react-router';

import { SIGN_IN } from '../Services/API';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [login, setLogin] = React.useState(() => localStorage.getItem('token') ? true : false);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [alert, setAlert] = React.useState(null);
  const navigate = useNavigate();

  const signOut = async () => {
    setLogin(false);
    setLoading(false);
    setError(false);
    localStorage.removeItem('token');
    navigate('/');
  }

  const signIn = async (username, password) => {
    try{
      setError(null);
      setLoading(true);
      const {url, options} = SIGN_IN(username, password);
      const response = await fetch(url, options);
      if(!response.ok) throw new Error('Erro: credenciais inválidas');
      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      setLogin(true);
      navigate('/noticias');
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
    <AuthContext.Provider value={{signIn, signOut, login, loading, error, alert, setAlert}}>
      {children}
    </AuthContext.Provider>
  )
}
