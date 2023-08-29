'use client'
import Cookies from "js-cookie";
import { useRouter } from "next/navigation"

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
            <div>
                <p>menu</p>
                <div>{children}</div>
            </div>
        </body>
    )
}