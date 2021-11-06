import React from 'react';
import styles from './Login.module.css';
import Input from './form/Input';
import Button from './form/Button';
import useForm from '../Hooks/useForm';

const Login = () => {
  const username = useForm();
  const password = useForm();

  return (
    <div className={styles.wrapper}>
      <h1 className="logo">Cross<span className="green">life</span></h1>
      <form>
        <Input label="Usuário" id="username" type="text" {...username}/>
        <Input label="Senha" id="password" type="password" {...password}/>
        <Button styleButton="buttonSecondary">Entrar</Button>
      </form>
    </div>
  )
}

export default Login
