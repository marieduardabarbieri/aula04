export default function DashboardAlter(){
    return(
        <div>
             <div>
            <div className="container">

                <h1>Login</h1>
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
                    <button className="enviar">Entrar</button>
                </form>
            </div>
        </div>
        </div>
    )
}