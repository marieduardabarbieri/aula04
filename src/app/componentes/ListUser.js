
export default async function ListUser({lista}){
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return(
        <div>
             {lista.map((user, index) => {
                return(
                <div key={index}>
                    <p> {user.name}</p>
                </div>
                ) })}
        </div>
    )
}