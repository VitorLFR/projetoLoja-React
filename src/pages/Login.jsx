import '../components/Login/index.css'

export function Login(){

    return(
        <main>

        <section className="barraInicio">

            <div className="barraInicioContent">
                <div className="iconInicio">
                    <img src="/public/medias/images/iconCasa.svg" alt="" id="iconCasa"></img>
                </div>

                <h2>Bem vindo a melhor loja de imóveis do Brasil</h2>
            </div>
        </section>

        <section className="categorias">

            <div className="theme">
                <button id="themeChanger"><img src="public/medias/images/TEMA.png" alt="" id="themeIcon"></img></button>
            </div>

            <div className="box-containerL">

                <div className="containerL">
                    <div className="icon">
                        <img src="public/medias/images/entrarIcon.svg" alt="" id="boxEntrar"></img>
                    </div>

                    <div className="containerInfo">

                        <div className="containerLogin">
                            <form>
                    
                                <section className="form-control">
                                    
                                    <p>NOME</p>
                                    <input type="text" id="nomel" />
                    
                                </section>
                    
                                <section className="form-control">
                                    
                                    <p>SENHA</p>
                                    <input type="text" id="SenhaL"></input>
                                    
                                </section>
                    
                            </form>       
                            <a href="">CONTINUAR</a>             
                        </div>

                    </div>
                </div>

                

            </div>

            <h1>Não tem uma conta ainda?</h1>
            <a href="/signup">Cadaste-se aqui.</a>
        </section>

    </main>
    )
}