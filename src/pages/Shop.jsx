import axios from "axios";
import { useEffect, useState } from "react";
import "../components/Product/Shop.css";

export function productCatch(ProdutoID) {
  var produtoId = ProdutoID;
  console.log("O id do produto clicado é " + produtoId);

  localStorage.setItem("produtoId", produtoId);

  return produtoId;
}

export function productInfos(produtoId, produtoTipo) {
  productCatch(produtoId);
  productTypeCatchAll(produtoTipo);

  localStorage.setItem("produtoId", produtoId);
  localStorage.setItem("productTypeAll", produtoTipo);
}

function productTypeCatchAll(ProdutoTipo) {
  var produtoType = ProdutoTipo;
  localStorage.setItem("productTypeAll", produtoType);
}

export function Shop() {
  const currentProductType = localStorage.getItem("productType");
  const [data, setData] = useState([]);

  const [maxPrice, setMaxPrice] = useState(Number.POSITIVE_INFINITY);

  const filteredData = data.filter(product => parseFloat(product.preco) <= maxPrice)

  var price = 0;

  const handleFilterChange= (event) => {
    price = parseFloat(event.target.value);
  }

  const handleFilter = () => {
    if (!isNaN(price)) {
      setMaxPrice(price);
    }
  }

  useEffect(() => {
    if (currentProductType === "/") {
      axios
        .all([
          axios.get("http://localhost:7000/fazendas"),
          axios.get("http://localhost:7000/terrenos"),
          axios.get("http://localhost:7000/kitnets"),
        ])
        .then(
          axios.spread((response1, response2, response3) => {
            setData([...response1.data, ...response2.data, ...response3.data]);
          })
        )
        .catch((error) => console.error("Erro ao buscar produtos: ", error));
    } else {
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
