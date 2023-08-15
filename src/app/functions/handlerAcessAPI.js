'use server'

const lista = [
    {name: "Carol",
    email: "Carol@gmail.com",
    password: "Carol123",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"}
];

const getUserAuthenticated = (users) => {
   {lista.map (user =>{
    if(user.email === user.email && user.password === user.password){
        return users;
    }
    else{
        return null;
    }
   })}

}

const getUsers = () =>{
    return lista;
}

export { getUsers, getUserAuthenticated };