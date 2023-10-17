'use server'

const url = "https://aula-17-10-eta.vercel.app";

const getUserAuthenticated = async (user) => { //constante de vereficação de autenticação
   const responseOfApi = await fetch(url + "/user/authenticated",
     {
        method: "POST",
        headers: {"Contente-Type": "application/json"},
        body: JSON.stringify(user)
     }
   );
   const userAuth = await responseOfApi.json;
   return userAuth;
}

const getUsers = async () => { //retorno dos usuários autenticados
    const responseOfApiGet = await fetch(url + "/users")
    const usersGetUsers = await responseOfApiGet.json();
    return usersGetUsers;
}

export { getUsers, getUserAuthenticated };