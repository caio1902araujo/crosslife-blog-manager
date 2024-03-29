import React from 'react';

import { AuthContext } from '../../Hooks/useAuth';
import useForm from '../../Hooks/useForm';

import Logo from '../../Components/Logo/Logo';
import Input from '../../Components/Input/Input';
import ErrorSecondary from '../../Helper/Error/ErrorSecondary';
import ButtonSecondary from '../../Components/Button/ButtonSecondary';
import Head from '../../Components/head/head';

import styles from './Login.module.css';

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
      <Head title='Login' description='página para login do autor'/>
      <Logo/>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' id='username' type='text' {...username}/>
        <Input label='Senha' id='password' type='password' {...password}/>
        {
          loading ?
          <ButtonSecondary disabled>Carregando...</ButtonSecondary> :
          <ButtonSecondary>Entrar</ButtonSecondary>
        }
      </form>
      <ErrorSecondary error={error} />
    </div>
  )
}

export default Login;
