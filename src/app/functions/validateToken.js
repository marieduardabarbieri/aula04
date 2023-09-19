
import { decode } from "jsonwebtoken";  //jwt instaldo

const validateToken = (token)=>{  //validação do token
    const isTokenValidate = decode(token);
    if(isTokenValidate){
        return token= true
    }
    return token=false;
}   
export {validateToken};