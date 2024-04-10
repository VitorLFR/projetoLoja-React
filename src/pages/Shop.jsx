// Importa a biblioteca axios para realizar requisições HTTP
import axios from "axios";

// Importa os hooks useEffect e useState do React para lidar com efeitos colaterais e estados em componentes funcionais
import { useEffect, useState } from "react";

// Importa o arquivo de estilos para este componente
import "../components/Product/Shop.css";

// Função responsável por capturar o ID do produto clicado e armazená-lo no localStorage
export function productCatch(ProdutoID) {
  // Variável para armazenar o ID do produto
  var produtoId = ProdutoID;
  // Exibe o ID do produto no console
  console.log("O id do produto clicado é " + produtoId);
  // Armazena o ID do produto no localStorage
  localStorage.setItem("produtoId", produtoId);
  // Retorna o ID do produto
  return produtoId;
}

// Função responsável por armazenar as informações do produto no localStorage
export function productInfos(produtoId, produtoTipo) {
  // Chama a função productCatch para armazenar o ID do produto
  productCatch(produtoId);
  // Chama a função productTypeCatchAll para armazenar o tipo de produto
  productTypeCatchAll(produtoTipo);
  // Armazena o ID do produto no localStorage
  localStorage.setItem("produtoId", produtoId);
  // Armazena o tipo de produto no localStorage
  localStorage.setItem("productTypeAll", produtoTipo);
}

// Função responsável por armazenar o tipo de produto no localStorage
function productTypeCatchAll(ProdutoTipo) {
  // Variável para armazenar o tipo de produto
  var produtoType = ProdutoTipo;
  // Armazena o tipo de produto no localStorage
  localStorage.setItem("productTypeAll", produtoType);
}

// Componente de Loja responsável por exibir os produtos disponíveis para compra
export function Shop() {
  // Obtém o tipo de produto atual do localStorage
  const currentProductType = localStorage.getItem("productType");
  // Estado para armazenar os dados dos produtos
  const [data, setData] = useState([]);
  // Estado para armazenar o preço máximo permitido
  const [maxPrice, setMaxPrice] = useState(Number.POSITIVE_INFINITY);

  // Filtra os dados dos produtos com base no preço máximo
  const filteredData = data.filter(product => parseFloat(product.preco) <= maxPrice)

  // Variável para armazenar o preço inserido pelo usuário
  var price = 0;

  // Função para lidar com a mudança no campo de filtro de preço
  const handleFilterChange= (event) => {
    price = parseFloat(event.target.value);
  }

  // Função para aplicar o filtro de preço
  const handleFilter = () => {
    if (!isNaN(price)) {
      setMaxPrice(price);
    }
  }

  // Efeito colateral para buscar os dados dos produtos com base no tipo atual
  useEffect(() => {
    // Verifica se o tipo de produto atual é "/"
    if (currentProductType === "/") {
      // Se for "/", busca os dados de todos os tipos de produtos
      axios
        .all([
          axios.get("http://localhost:7000/fazendas"),
          axios.get("http://localhost:7000/terrenos"),
          axios.get("http://localhost:7000/kitnets"),
        ])
        .then(
          // Combina as respostas e atualiza o estado dos dados
          axios.spread((response1, response2, response3) => {
            setData([...response1.data, ...response2.data, ...response3.data]);
          })
        )
        .catch((error) => console.error("Erro ao buscar produtos: ", error));
    } else {
      // Caso contrário, busca os dados do tipo de produto atual
      axios
        .get("http://localhost:7000" + currentProductType)
        .then((response) => setData(response.data))
        .catch((error) => console.error("Erro ao buscar produtos: ", error));
    }
  }, [currentProductType]);

  return (
    <main>
      <section className="barraInicio">
        <div className="barraInicioContent">
          <div className="iconInicio">
            <img
              src="/public/medias/images/iconCasa.svg"
              alt=""
              id="iconCasa"
            ></img>
          </div>
          <h2>Bem vindo a melhor loja de imóveis do Brasil</h2>
        </div>
      </section>

      <section className="categorias produtosG">
        <h2>OFERECEMOS</h2>
      </section>

      <section className="productsDisplay">
        <div className="filterBar">
          <div className="filters">
            <h3>FILTROS</h3>

            <p>Digite o preço máximo</p>
            <input type="text" onChange={handleFilterChange} />

            <button onClick={handleFilter}>Aplicar</button>
          </div>
        </div>
        <div className="box-containerP">
          {filteredData.map((product) => (
            <div className="containerP" key={product.id}>
              <div className="iconP">
                <img
                  src={product.imagem}
                  alt=""
                  id="productImage"
                  className="productImage"
                ></img>
              </div>
              <div className="containerInfoP">
                <p id="productName">{product.nome}</p>
                <p id="productPrice">R$ {product.preco}</p>
                <a
                  href="/product"
                  id="productAcess"
                  onClick={() => productInfos(product.id, product.tipo)}
                >
                  VER
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
