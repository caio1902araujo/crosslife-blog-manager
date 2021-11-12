import React from 'react';
import styles from './Login.module.css';
import { AuthContext } from '../../Hooks/useAuth';
import useForm from '../../Hooks/useForm';
import Error from '../../Helper/Error/Error';
import Input from '../../Components/Input/Input';
import ButtonSecondary from '../../Components/Button/ButtonSecondary';
import Logo from '../../Components/Logo/Logo';

const Login = () => {
  const username = useForm();
  const password = useForm();
  const {signIn, loading, error} = React.useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(username.validate() && password.validate()){
      signIn(username.value, password.value);
    }
  }

  return (
    <div className={styles.wrapper}>
      <Logo/>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" id="username" type="text" {...username}/>
        <Input label="Senha" id="password" type="password" {...password}/>
        {
          loading ?
          <ButtonSecondary disabled>Carregando...</ButtonSecondary> :
          <ButtonSecondary>Entrar</ButtonSecondary>
        }
      </form>
      <Error error={error} errorStyle={"errorSecondary"}/>
    </div>
  )
}

export default Login
