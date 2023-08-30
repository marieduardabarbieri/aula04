'use client'
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation"
import '@/app/globals.css';

export const metadata = {
    title: 'Register user',
    description: 'Project for class PTAC'
}

export default function DashboardLayout({children}){
    const {push} = useRouter();

    const logout = (e) =>{
        e.preventDefault();
        Cookies.remove('token');
        push('/')
    }

    return(
        <body>
            <nav>
                <ul className="menu">
                <Link id="link" href="/">Home</Link>
                <Link id="link" href="/pages/dashboard/alter">Aterar Cadastro</Link>
                <Link id="link" href="/pages/dashboard/register">Registre-se</Link>
                <Link id="link" href="#">Fale Conosco</Link>
                <Link id="link" href="#">Configurações</Link>
                </ul>
            </nav>
            <div>{children}</div>
        </body>
    )
}