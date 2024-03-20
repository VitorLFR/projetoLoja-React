import '../components/Product/Product.css'

export function Product(){
    return(
        
        <main>

        <section className="productMain">
            <div className="theme">
                <button id="themeChanger"><img src="public/medias/images/TEMA.png" alt="" id="themeIcon"></img></button>
            </div>
            
            <div className="productDisplay">
                <div className="barralateral"></div>

                <div className="ProductInfos">

                    <div className="returnBtn"><a href="/products"><img src="public/medias/images/returnBtn.svg" alt="" id="returnBtn"></img></a></div>

                    <div className="productMainInfos">
                        <h1 id="productName">NOME DO PRODUTO</h1>
                        <img src="public/medias/productImages/fP01.svg" alt="" id="productImage"></img>
                        <p id="productPrice">PREÇO</p>
                        <a href="" id="addToCart">ADICIONAR AO CARRINHO</a>
                    </div>

                    <table className="descriptionTable">
                        
                    <h2>DESCRIÇÃO DO PRODUTO</h2>
                        <tbody>
                            <tr>
                                <td>Local:</td>
                                <td id="productLocal">Teste</td>
                            </tr>
                            <tr>
                                <td>Condição:</td>
                                <td id="productCondition">Teste</td>
                            </tr>
                            <tr>
                                <td>Tamanho:</td>
                                <td id="productSize">Teste</td>
                            </tr>
                            <tr>
                                <td>Tipo:</td>
                                <td id="productType">Teste</td>
                            </tr>

                        </tbody>
                    </table>
                </div>

                <div className="barralateral"></div>
            </div>
        </section>
    </main>

    )
}