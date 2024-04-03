import axios from "axios";
import { useEffect, useState } from "react";
import "../components/Product/Shop.css";

export function productCatch(ProdutoID) {
  var produtoId = ProdutoID;
  console.log("O id do produto clicado é " + produtoId);

  localStorage.setItem("produtoId", produtoId);

  return produtoId;
}

export function productInfos(produtoId, produtoTipo){
  productCatch(produtoId);
  productTypeCatchAll(produtoTipo)

  localStorage.setItem("produtoId", produtoId);
  localStorage.setItem("productTypeAll", produtoTipo)
}

function productTypeCatchAll(ProdutoTipo){
  var produtoType = ProdutoTipo;
  localStorage.setItem("productTypeAll", produtoType)
}

export function Shop() {
  const currentProductType = localStorage.getItem("productType");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (currentProductType === "/") {
      axios
        .all([
          axios.get("http://localhost:7000/fazendas"),
          axios.get("http://localhost:7000/terrenos"),
          axios.get("http://localhost:7000/kitnets")
        ])
        .then(
          axios.spread((response1, response2, response3) => {
            setData([
              ...response1.data,
              ...response2.data,
              ...response3.data
            ]);
          })
        )
        .catch((error) =>
          console.error("Erro ao buscar produtos: ", error)
        );
    } else {
      axios
        .get("http://localhost:7000" + currentProductType)
        .then((response) => setData(response.data))
        .catch((error) =>
          console.error("Erro ao buscar produtos: ", error)
        );
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

      <div className="box-containerP">
        {data.map((product) => (
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
    </main>
  );
}
