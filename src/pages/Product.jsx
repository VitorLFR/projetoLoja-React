import axios from 'axios'
import '../components/Product/Product.css'
import { useEffect, useState } from 'react';

const currentId = localStorage.getItem("produtoId");
console.log(localStorage.getItem("produtoId"))
var currentProductType = localStorage.getItem("productType");



export function Product() {

  var typeProductPath = "http://localhost:7000"

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (currentProductType !== "/") {
          response = await axios.get(`${typeProductPath}${currentProductType}/?id=${currentId}`);
        } else {
          const productTypeAll = localStorage.getItem("productTypeAll");
          response = await axios.get(`${typeProductPath}/${productTypeAll.toLowerCase()}s/?id=${currentId}`);
        }
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    };

    fetchData();
  }, [currentId, currentProductType]);



  return (

    <main>

      <section className="productMain">

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

              <div className='descriptionTitle'>
                  <h2>DESCRIÇÃO DO PRODUTO</h2>
                </div>

              <table className="descriptionTable">            

                <tbody className='tableBody'>
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


