import Link from "next/link";

export default async function ListUser({ lista }) {
    await new Promise((resolve) => setTimeout(resolve, 3000)); //tempo com o qual os usuários aparecerão na tela
    return (
        <div>
            {lista.map((user, index) => { //map da lista dos nomes dos usuários autenticados
                return (
                    <div className="usuarioEsp" key={index}>
                        <Link href={`/pages/dashboard/alter/${user.id}`}>
                            <p> {user.name}</p>
                        </Link>
                    </div>
                )})}
        </div>
    )
}