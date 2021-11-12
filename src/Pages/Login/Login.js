import React from 'react';
import styles from './Login.module.css';
import Input from '../../Components/Form/Input';
import ButtonSecondary from '../../Components/Button/ButtonSecondary';
import useForm from '../../Hooks/useForm';
import { AuthContext } from '../../Hooks/useAuth';
import Error from '../../Helper/Error';
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
