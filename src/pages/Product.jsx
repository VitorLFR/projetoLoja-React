// Importa a biblioteca axios para realizar requisições HTTP
import axios from 'axios'

// Importa o arquivo de estilos para este componente
import '../components/Product/Product.css'

// Importa os hooks useEffect e useState do React para gerenciar efeitos colaterais e estados em componentes funcionais
import { useEffect, useState } from 'react';

// Obtém o ID do produto atual armazenado no armazenamento local do navegador
const currentId = localStorage.getItem("produtoId");

// Exibe o ID do produto atual no console para fins de depuração
console.log(localStorage.getItem("produtoId"))

// Obtém o tipo de produto atual armazenado no armazenamento local do navegador
var currentProductType = localStorage.getItem("productType");

// Componente de Produto que exibe os detalhes de um produto específico
export function Product() {
  // Caminho base para a API de produtos
  var typeProductPath = "http://localhost:7000"

  // Estado para armazenar os dados do produto
  const [data, setData] = useState([]);

  // Efeito que é executado após a renderização inicial para buscar os detalhes do produto
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        // Verifica se o tipo de produto atual não é '/'
        if (currentProductType !== "/") {
          // Se não for '/', faz uma solicitação GET para obter detalhes do produto com base no ID e no tipo de produto
          response = await axios.get(`${typeProductPath}${currentProductType}/?id=${currentId}`);
        } else {
          // Caso contrário, obtém o tipo de produto 'all' armazenado no armazenamento local e faz uma solicitação GET para obter detalhes do produto
          const productTypeAll = localStorage.getItem("productTypeAll");
          response = await axios.get(`${typeProductPath}/${productTypeAll.toLowerCase()}s/?id=${currentId}`);
        }
        // Define os dados do produto no estado
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    };

    fetchData();
  }, []); // Os colchetes vazios indicam que este efeito será executado apenas uma vez após a renderização inicial



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


