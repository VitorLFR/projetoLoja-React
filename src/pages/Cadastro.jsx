export function Cadastro (){

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
                        <img src="public/medias/images/signupIcon.svg" alt="" id="boxCadastrar"></img>
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
                    
                                <a href="/">CONTINUAR</a>
                    
                            </form>                    
                        </div>

                    </div>
                </div>

            </div>

            <h1>Já tem uma conta?</h1>
            <a href="/login">Entre aqui.</a>
        </section>

    </main>

    )
}