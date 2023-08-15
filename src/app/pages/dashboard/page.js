import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const listar = getUsers();

    return (
        <div>
            {listar.map((user, index) =>{
                <div key={index}>
                    <p>Nome: {user.name}</p>
                    
                </div>
            })}
        </div>
    );
};