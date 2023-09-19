'use client'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';  //importação da estilização da caixinha de notificação

export const metadata = {  //title
    title: 'Register user',
    description: 'Project for class PTAC'
}

export default function DashboardRegister() {

    const handlerRegister =  (e) => {  //aviso para envio com sucesso de formulario
        e.preventDefault(); 
        try {
            toast.success("Usuário registrado com sucesso!!!"); 
        } catch {
          toast.error("Erro no registro do usuário. Tente novamente!"); //não tem como cair no erro, pois não tem condição
        }
      } 

    return (
        <div>
            <div className="container">
            <h1>Registre-se</h1><hr/>
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
                    <button className="enviar" onClick={handlerRegister} >Registrar </button>
                </form>
                <ToastContainer/>
            </div>
        </div>
    )
}