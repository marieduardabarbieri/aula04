'use server'

const lista = [
    {name: "Carol"},
    {email: "Carol@gmail.com"},
    {password: "Carol123"},
    {token: "Carol"}
];

const getUserAuthenticated = (user) => {
   

}

const getUsers = () =>{
    return lista;
}
export { getUsers, getUserAuthenticated };