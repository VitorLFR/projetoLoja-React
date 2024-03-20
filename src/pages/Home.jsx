

export function Home() {
    return (
        <main className="mainP">

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
                <h2>OFERECEMOS</h2>

                <div className="box-container">

                    <div className="container">
                        <div className="icon">
                            <img src="public/medias/images/boxFazenda.svg" alt="" id="boxFazenda"></img>
                        </div>

                        <div className="containerInfo">

                            <p>FAZENDAS DE BOA QUALIDADE PERTO DE VOCÊ</p>

                            <a href="/products" id="fazendasProducts">PROCURAR</a>

                        </div>
                    </div>

                    <div className="container">
                        <div className="icon">
                            <img src="public/medias/images/boxTerreno.svg" alt="" id="boxTerreno"></img>
                        </div>

                        <div className="containerInfo">
                            
                            <p>TERRENOS DE BOA QUALIDADE PERTO DE VOCÊ</p>

                            <a href="/products" id="terrenosProducts" >PROCURAR</a>

                        </div>
                    </div>
                    <div className="container">
                        <div className="icon">
                            <img src="public/medias/images/boxKitnet.svg" alt="" id="boxKitnet"></img>
                        </div>

                        <div className="containerInfo">

                            <p>KITNETS DE BOA QUALIDADE PERTO DE VOCÊ</p>

                            <a href="/products" id="kitnetsProducts">PROCURAR</a>

                        </div>
                    </div>

                </div>                

            </section>
            <a href="/products" id="seeAllProducts">VER TUDO</a>

        </main>        

    )
}
