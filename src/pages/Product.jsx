import axios from 'axios'
import '../components/Product/Product.css'
import { useEffect, useState } from 'react';

const currentId = localStorage.getItem("produtoId");
console.log(localStorage.getItem("produtoId"))



export function Product(){

    var typeProductPath = "http://localhost:7000/" 

    var currentProductType = localStorage.getItem("productType");
    if(currentProductType != "/"){
        fetch(typeProductPath + currentProductType + "s/?id=" + currentId).then((data) => {
            return data.json();
          });
    } else{
        currentProductType = localStorage.getItem("productTypeAll")
        fetch(typeProductPath + currentProductType.toLowerCase() + "s/?id=" + currentId).then((data) => {
            return data.json();
          });
    }
    
  const [data, setData] = useState([]);

  useEffect(() => {
    if (currentProductType === "/") {
      axios
        .get("http://localhost:7000/fazendas")
        .then((response1) => axios.get("http://localhost:7000/terrenos"))
        .then((response2) => axios.get("http://localhost:7000/kitnets"))
        .then((response3) => {
          setData([
            ...response1.data,
            ...response2.data,
            ...response3.data
          ]);
        })
        .catch((error) => console.error("Erro ao buscar produtos: ", error));
    } else {
      axios
        .get("http://localhost:7000" + currentProductType)
        .then((response) => setData(response.data))
        .catch((error) => console.error("Erro ao buscar produtos: ", error));
    }
  }, [currentProductType]);

  return(
        
    <main>

    <section className="productMain">
        <div className="theme" >
            <button id="themeChanger"><img src="public/medias/images/TEMA.png" alt="" id="themeIcon"></img></button>
        </div>
        
        <div className="productDisplay">
            <div className="barralateral"></div>

            {data.map((product) => (
                <div className="ProductInfos" key={product.id}>

                <div className="returnBtn"><a href="/shop"><img src="public/medias/images/returnBtn.svg" alt="" id="returnBtn"></img></a></div>

                <div className="productMainInfos">
                    <h1 id="productName">{product.nome}</h1>
                    <img src={product.imagem} alt="" id="productImage"></img>
                    <p id="productPrice">R$ {product.preco}</p>
                    <a href="" id="addToCart">ADICIONAR AO CARRINHO</a>
                </div>

                <table className="descriptionTable">
                    
                <h2>DESCRIÇÃO DO PRODUTO</h2>
                    <tbody>
                        <tr>
                            <td>Local:</td>
                            <td id="productLocal">{product.local}</td>
                        </tr>
                        <tr>
                            <td>Condição:</td>
                            <td id="productCondition">{product.condicao}</td>
                        </tr>
                        <tr>
                            <td>Tamanho:</td>
                            <td id="productSize">{product.tamanho}</td>
                        </tr>
                        <tr>
                            <td>Tipo:</td>
                            <td id="productType">{product.tipo}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
            ))}

            <div className="barralateral"></div>
        </div>
    </section>
</main>

)
}

    
