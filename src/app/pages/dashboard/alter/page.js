'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
    title: 'Alter user',
    description: 'Project for class PTAC'
}

export default function DashboardAlter(){

    const handlerAlterar =  (e) => {  //serve para a criação de uma notificação, nesse caso, para informar se usuário foi alterado ou não com a ajuda do Toast
        e.preventDefault(); //previne o envio do formulario de alterar
        try {
            toast.success("Usuário alterado com sucesso!!!"); 
        } catch {
          toast.error("Erro na alteração do usuário. Tente novamente!"); //não tem como cair no erro, pois não tem condição
        }
      }    

    return(
        <div>
            <div className="container">

                <h1>Altere seu Cadastro</h1><hr/>
                <form >
                    <div class="divInput">
                        <input
                            className="input"
                            placeholder='Nome'
                            type="name">
                        </input>
                    </div>

                    <div class="divInput">
                        <input
                            className="input"
                            placeholder='E-mail'
                            type="email">
                        </input></div>

                    <div class="divInput">
                        <input
                            className="input"
                            placeholder='Senha'
                            type='password'>
                        </input></div>
                    <button className="enviar" onClick={handlerAlterar}>Alterar</button>
                </form>
                <ToastContainer/>
            </div>
        </div>
    )
}