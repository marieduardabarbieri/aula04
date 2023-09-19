'use client'
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation"
import '@/app/globals.css';


export default function DashboardLayout({children}){
    const {push} = useRouter();

    const logout = (e) =>{ //constante para ser redirecionado para login(sair)
        e.preventDefault();
        Cookies.remove('token');
        push('/')
    }

    return(
        <body>
            <nav>
                <ul className="menu">
                <Link id="link" href="/pages/dashboard">Home</Link>
                <Link id="link" href="/pages/dashboard/alter">Aterar Cadastro</Link>
                <Link id="link" href="/pages/dashboard/register">Registre-se</Link>
                <Link id="link" href="#">Fale Conosco</Link>
                <Link id="link" href="#">Configurações</Link>
                <button id="link" className="botaoSair" onClick={logout}>Sair</button>
                </ul>
            </nav>
            <div>{children}</div>
        </body>
    )
}