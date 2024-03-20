export function Shop() {

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

        <section className="categorias produtosG">

            <div className="theme">
                <button id="themeChanger"><img src="public/medias/images/TEMA.png" alt="" id="themeIcon"></img></button>
            </div>
            <h2>OFERECEMOS</h2>

            <div className="box-containerP">

                <div className="containerP">
                    <div className="iconP">
                        <img src="" alt="" id="productImage"></img>
                    </div>

                    <div className="containerInfoP">

                        <p id="productName">NOME PRODUTO</p>
                        <p id="productPrice">PREÇO</p>

                        <a href="#">VER</a>

                    </div>
                </div>
                
            </div>

        </section>

    </main>
    
    )
}