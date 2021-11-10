import React from 'react';
import styles from './Login.module.css';
import Input from '../../Components/form/Input';
import Button from '../../Components/form/Button';
import useForm from '../../Hooks/useForm';
import { AuthContext } from '../../Hooks/useAuth';
import Error from '../../Helper/Error';

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
      <h1 className="logo">Cross<span className="green">life</span></h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" id="username" type="text" {...username}/>
        <Input label="Senha" id="password" type="password" {...password}/>
        {
          loading ?
          <Button styleButton="buttonSecondary" disabled>Carregando...</Button> :
          <Button styleButton="buttonSecondary">Entrar</Button>
        }
      </form>
      <Error error={error} errorStyle={"errorSecondary"}/>
    </div>
  )
}

export default Login
