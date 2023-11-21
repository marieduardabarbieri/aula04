'use client'

import { postUser } from '@/app/functions/handlerAcessAPI';
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';  //importação da estilização da caixinha de notificação
import { resolve } from 'styled-jsx/css';

export const metadata = {  //title
    title: 'Register user',
    description: 'Project for class PTAC'
}

export default function DashboardRegister() {
    const[user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { push } = useRouter();

    const handlerFormRegister = async (event) => {  //aviso para envio com sucesso de formulario
        event.preventDefault(); 
        try {
            await postUser(user);
            return push("/pages/dashboard");
        } catch {
          toast.error("Erro no registro do usuário. Tente novamente!"); //não tem como cair no erro, pois não tem condição
        }
      } 

    return (
        <div>
            <div className="container">
            <h1>Registre-se</h1><hr/>
               <form onSubmit={handlerFormRegister}>
                    <div className="divInput">
                        <input
                            className="input"
                            placeholder="Nome"
                            type="name"
                            onChange={(e) => { setUser({ ...user, name: e.target.value }) }}>
                        </input>
                    </div>

                    <div className="divInput">
                        <input
                            className="input"
                            placeholder="E-mail"
                            type="email"
                            onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
                        </input></div>

                    <div className="divInput">
                        <input
                            className="input"
                            placeholder="Senha"
                            type="password"
                            onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
                        </input></div>
                    <button className="enviar">Registrar </button>
                </form>
                <ToastContainer/>
            </div>
        </div>
    )
}