import React from "react";
// import { useNavigate } from "react-router";
import { TOKEN_POST } from "../Services/API";

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
  const [login, setLogin] = React.useState(null);
  // const [loading, setLoading] = React.useState(null);
  // const [error, setError] = React.useState(null);

  const signIn = async (username, password) => {
    const {url, options} = TOKEN_POST({usuario: username, hash: password});
    const response = await fetch(url, options);
    const {Token} = await response.json();
    window.localStorage.setItem('token', Token);
    setLogin(true);
  }

  return (
    <AuthContext.Provider value={{signIn, login}}>
      {children}
    </AuthContext.Provider>
  )
}