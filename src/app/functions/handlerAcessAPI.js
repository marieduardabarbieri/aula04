'use server';

import { cookies } from "next/dist/client/components/headers";

const url = "https://aula-17-10-pink.vercel.app";

const getUserAuthenticated = async (user) => { //constante de vereficação de autenticação
   const responseOfApi = await fetch(url + "/user/authenticated", //aplicação do endpoint
      {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(user)
      }
   );
   const userAuth = await responseOfApi.json();
   console.log(userAuth);
   return userAuth;
}

const postUser = async (user) =>{
   try{ 
      console.log(user)
      const responseOfApi = await fetch(url + "/user", {
         method: 'POST',
         headers: {'Content-Type': 'Application/json'},
         body: JSON.stringify(user)
      });
      const userSave = await responseOfApi.json();
      return userSave;
   } catch{
      return null;
   }
}

const updateUser = async (user, id) =>{
   try{ 
      const responseOfApi = await fetch(url + "/user/" + id, {
         method: 'PUT',
         headers: {'Content-Type': 'Application/json'},
         body: JSON.stringify(user)
      });
      const userUpdate = await responseOfApi.json();
      return userUpdate;
   } catch{
      return null;
   }
}
///falta criar uma getUser para capturar o usuario e o negocio conseguir buscar
const getUsers = async () => { //retorno dos usuários autenticados
   try{
      const responseOfApiGET = await fetch(url + "/users",{
        cache:"no-cache"
      });
      const lista = await responseOfApiGET.json(); //formatando a informação p/ formato json
        console.log(lista)
      return lista;
     }catch{
        return [];
     }
}
    


const getUser = async () => { //retorno dos usuários autenticados
   try{
   const responseOfApi = await fetch(url + '/user/' + id, {
      method: 'GET',
      headers: {
         'Content-Type': 'Application/json',
      },
   });
   const userGet = await responseOfApi.json();
   return userGet;
   } catch{
      return null;
   }
}

export { getUserAuthenticated, postUser, updateUser, getUsers, getUser };