'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push } = useRouter();

  const handlerLogin = async (e) => {  //Toast para notificar usuário caso não esteja devidamente autenticado 
    e.preventDefault();
    try {
      const userAutent = await handlerAcessUser(user);
      if(userAutent.token === undefined){
        toast.error("Erro no email e senha. Ops! A culpa é sua ;(")
      }
      push('/pages/dashboard');
    } catch {
      toast.error("Erro na aplicação. Não se preocupe, foi cagada do desenvolvedor ;)")
    }
  }

  return (
    <div className="container">

      <h1>Login</h1><hr/>
      <form onSubmit={handlerLogin}>

        <div class="divInput">
        <input
         className="input"
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input></div>

        <div class="divInput">
        <input
          className="input"
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input></div>
        <button className="enviar">Entrar</button>
      </form>
      <ToastContainer/>
    </div>
  )
}
