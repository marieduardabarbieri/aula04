import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUser from "@/app/componentes/ListUser";


export default async function Dashboard() {
   const lista = getUsers();
   //console.log(listar)
    return (
        <div>
            <h2>Nome dos Usuários cadastrados</h2>
            <Suspense fallback={<p>Carregando usuários...</p>}>
            <ListUser lista={lista}/>
        </Suspense>
        </div>
    );
};//falta listar