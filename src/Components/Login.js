import React from 'react';
import styles from './Login.module.css';
import Input from './form/Input';
import Button from './form/Button';

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className="logo">Cross<span className="green">life</span></h1>
      <form>
        <Input label="Usuário" id="username" type="text"/>
        <Input label="Senha" id="password" type="password"/>
        <Button styleButton="buttonSecondary">Entrar</Button>
      </form>
    </div>
  )
}

export default Login
