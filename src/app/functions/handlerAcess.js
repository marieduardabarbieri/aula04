import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";

const handlerAcessUser = async (user) => {

    const userAuth = await getUserAuthenticated(user);
    
    const isTokenValidate = await validateToken(userAuth.token);

    if (isTokenValidate) {
        Cookies.set('token', userAuth.token, { expires: 1 });  //quando usuário for autenticado, será criado um cookie com o nome 'token', individualmente, para cda usuário, para segurança do mesmo
        localStorage.setItem("name", userAuth.name); //salvo na localStorage
    }
    return userAuth;
}
export default handlerAcessUser;

