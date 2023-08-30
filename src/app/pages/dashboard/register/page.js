

export default function DashboardRegister() {
    return (
        <div>
            <div className="container">

                <h1>Registre-se</h1>
                <hr/>
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
                    <button className="enviar">Registrar</button>
                </form>
            </div>
        </div>
    )
}