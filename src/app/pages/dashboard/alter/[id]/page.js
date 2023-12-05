'use client'
import { updateUser } from "@/app/functions/handlerAcessAPI";
import { useEffect, useState } from "react";
import { getUser } from "@/app/functions/handlerAcessAPI";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
    title: 'Alter user',
    description: 'Project for class PTAC'
}

export default function DashboardAlter({params}){
    const[user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });
    const { push } = useRouter();

    useEffect(() =>{
        const findUser = async () =>{
            const userFind = await getUser(params.id);
            setUser({...user, name: userFind.name, email: userFind.email});
        }
        findUser();
    }, []);

    const handlerAlterar = async (e) => {  
        e.preventDefault(); //previne o envio do formulario de alterar
        try {
            toast.success("Usuário alterado com sucesso!!!"); 
            await updateUser(user, params.id);
            return push("/pages/dashboard");
        } catch {
          toast.error("Erro na alteração do usuário. Tente novamente!"); 
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
                            type="name"
                            value={user.name}
                            onChange={(e) => { setUser({ ...user, name: e.target.value }) }}
                           >
                        </input>
                    </div>

                    <div class="divInput">
                        <input
                            className="input"
                            placeholder='E-mail'
                            type="email"
                            value={user.email}
                            onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                           >
                        </input></div>

                    <div class="divInput">
                        <input
                            className="input"
                            placeholder='Senha'
                            type='password'
                            value={user.password}
                            onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
                           >
                        </input></div>
                    <button className="enviar" onClick={handlerAlterar}>Alterar</button>
                </form>
                <ToastContainer/>
            </div>
        </div>
    )
}