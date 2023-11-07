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

const getUsers = async () => { //retorno dos usuários autenticados
   try {
      const responseOfApiGet = await fetch(url + "/users")
      const usersGetUsers = await responseOfApiGet.json();
      return usersGetUsers;
   } catch {
      return [];
   }
}

const postUser = async (user) =>{
   try{ 
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

export { getUsers, getUserAuthenticated, postUser };