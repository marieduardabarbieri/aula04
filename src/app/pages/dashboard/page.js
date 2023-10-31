import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUser from "@/app/componentes/ListUser";

export const metadata = {
    title: 'Users ',
    description: 'Project for class PTAC'
}

export default async function Dashboard() {
  
    const lista = await getUsers();
    //console.log(listar)
    return (
        <div className="carregamentoUsuarios"> 
            <h2> Usuários Cadastrados</h2>
            <Suspense  fallback={<p className="fraseCarreg">Carregando usuários. Espere concluir carregamento...</p>}> 
                <div className="divLista" > 
                     <ListUser lista={lista} />
                </div>
            </Suspense>
        </div>
    );
};