'use server';

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
      console.log(user)
      const responseOfApi = await fetch(url + "/user/", + id, {
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

const getUsers = async () => { //retorno dos usuários autenticados
      const responseOfApi = await fetch(url + "/users",
     {next: {revalidate: 5}});
      const usersGetUsers = await responseOfApi.json();
      return usersGetUsers;
  
}

export { getUserAuthenticated, postUser, updateUser, getUsers };