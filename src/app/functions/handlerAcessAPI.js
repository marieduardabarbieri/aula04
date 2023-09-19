'use server'

const lista = [
    {
        name: "Carol de Andrade Lima",
        email: "Carol@gmail.com",
        password: "Carol123",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
        name: "Ana Santos",
        email: "Ana@gmail.com",
        password: "Ana",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    },
    {
        name: "Roberta Marques",
        email: "Roberta@gmail.com",
        password: "Roberta",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
];

const getUserAuthenticated = (users) => { //constante de vereficação de autenticação
    let userAutent = {}
    {
        lista.map(user => {
            if (users.email === user.email && users.password === user.password) {
               userAutent = user;
            }          
        })
        return userAutent;
    }
}

const getUsers = () => { //retorno dos usuários autenticados
    return lista;
}

export { getUsers, getUserAuthenticated };