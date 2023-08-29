import ListUser from "@/app/componentes/Listuser";
import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";

export default async function Dashboard(){
   const users = await getUsers();

   return(
    <div>
        <Suspense fallback={<p>Carregando</p>}>
            <ListUser users={users}/>
        </Suspense>
    </div>
   )
}