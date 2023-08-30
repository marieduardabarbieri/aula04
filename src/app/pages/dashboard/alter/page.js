export const metadata = {
    title: 'Alter user',
    description: 'Project for class PTAC'
}

export default function DashboardAlter(){
    return(
        <div>
             <div>
            <div className="container">

                <h1>Altere seu Cadastro</h1><hr/>
                <form >
                    <div class="divInput">
                        <input
                            className="input"
                            placeholder='Nome'
                            type="name">
                        </input>
                    </div>

                    <div class="divInput">
                        <input
                            className="input"
                            placeholder='E-mail'
                            type="email">
                        </input></div>

                    <div class="divInput">
                        <input
                            className="input"
                            placeholder='Senha'
                            type='password'>
                        </input></div>
                    <button className="enviar">Alterar</button>
                </form>
            </div>
        </div>
        </div>
    )
}