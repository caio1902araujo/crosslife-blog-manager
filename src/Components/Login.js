import React from 'react'
import Input from './form/Input'

const Login = () => {
  return (
    <div>
      <h1>Crosslife</h1>
      <form>
        <Input label="Usuário" id="username" type="text"/>
        <Input label="Senha" id="password" type="password"/>
      </form>
    </div>
  )
}

export default Login
