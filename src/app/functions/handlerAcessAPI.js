'use server'

const url = "https://aula-17-10-eta.vercel.app";

const getUserAuthenticated = async (user) => { //constante de vereficação de autenticação
   const responseOfApi = await fetch(url + "/user/authenticate",
     {
        method: "POST",
        headers: {"Contente-Type": "application/json"},
        body: JSON.stringify(user)
     }
   );
   const userAuth = await responseOfApi.json;
   return userAuth;
}

const getUsers = () => { //retorno dos usuários autenticados
}

export { getUsers, getUserAuthenticated };