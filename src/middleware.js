'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = async (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const urlDash = new URL('/pages/dashboard', request.url);
    const isTokenValidated = await validateToken(token);

    if (!isTokenValidated || !token) {    //se o usuário não for previamente autenticado ele não poderá entrar nas seguintes páginas abaixo 
        if (
            request.nextUrl.pathname === '/pages/dashboard' ||
            request.nextUrl.pathname === '/pages/dashboard/alter' ||
            request.nextUrl.pathname === '/pages/dashboard/register'
             ){ 
            return NextResponse.redirect(urlLogin); //e será retornado para o login para tentar novamente
        }
     }
       if(isTokenValidated) {
        return NextResponse.redirect(urlDash);//deu errado
      }

    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/dashboard/register', '/pages/dashboard/alter']
};

