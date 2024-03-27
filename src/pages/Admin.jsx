import { useState } from "react";
import "../components/Admin/Admin.css";
import axios from "axios";

export function Admin() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [condicao, setCondicao] = useState("");
  const [local, setLocal] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [imagem, setImagem] = useState("");
  const [tipo, setTipo] = useState("");

  const [nomeExistente, setNomeExistente] = useState(false);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };
  const handlePrecoChange = (event) => {
    setPreco(event.target.value);
  };
  const handleCondicaoChange = (event) => {
    setCondicao(event.target.value);
  };
  const handleLocalChange = (event) => {
    setLocal(event.target.value);
  };
  const handleTamanhoChange = (event) => {
    setTamanho(event.target.value);
  };
  const handleImagemChange = (event) => {
    setImagem(event.target.value);
  };
  const handleTipoChange = (event) => {
    setTipo(event.target.value);
  };

  const handleSubmitAdicionar = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nome", nome);
      formData.append("preco", preco);
      formData.append("condicao", condicao);
      formData.append("local", local);
      formData.append("tamanho", tamanho);
      formData.append("tipo", tipo);
      formData.append("imagem", imagem);
      const response = await axios.post(
        `http://localhost:7000/${tipo.toLowerCase()}s`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Operação realizada:", response.data);

      alert("Produto adicionado com sucesso");
      // Limpe os campos de entrada após o envio do formulário
      setNome("");
      setPreco("");
      setImagem("");
      setCondicao("");
      setTipo("");
      setLocal("");
      setTamanho("");

      setNomeExistente(false);
    } catch (error) {
      console.error("Erro ao realizar operação", error);
    }
  };

  const handleSubmitAtualizar = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append("nome", nome);
      formData.append("preco", preco);
      formData.append("condicao", condicao);
      formData.append("local", local);
      formData.append("tamanho", tamanho);
      formData.append("tipo", tipo);
      formData.append("imagem", imagem);
      const response = await axios.put(
        `http://localhost:7000/${tipo.toLowerCase()}s?nome=${nome}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Operação realizada:", response.data);

      alert("Produto atualizado com sucesso");
      // Limpe os campos de entrada após o envio do formulário
      setNome("");
      setPreco("");
      setImagem("");
      setCondicao("");
      setTipo("");
      setLocal("");
      setTamanho("");

      setNomeExistente(false);
    } catch (error) {
      console.error("Erro ao realizar operação", error);
    }
  };

  const handleSubmitRemover = async (event) => {
    event.preventDefault();

    try {
      const nomeProduto = event.target.elements.nome.value;
      const tipoProduto = event.target.elements.tipo.value;

      // Buscar o produto pelo nome e tipo antes de remover
      const response = await axios.get(
        `http://localhost:7000/${tipoProduto.toLowerCase()}s?nome=${nomeProduto}`
      );

      if (response.data.length === 0) {
        alert("Produto não encontrado");
        return;
      }

      // Se encontrado, remover o primeiro produto retornado
      const produtoId = response.data[0]._id;
      await axios.delete(
        `http://localhost:7000/${tipoProduto.toLowerCase()}s?id=${produtoId}`
      );

      console.log("Produto removido com sucesso");
      alert("Produto removido com sucesso");

      // Limpar os campos de entrada após a remoção do produto
      event.target.elements.nome.value = "";
      event.target.elements.tipo.value = "";
    } catch (error) {
      console.error("Erro ao realizar operação", error);
    }
  };

  return (
    <main className="AdminPage">
      <section className="ProductTable">
        <h1>Olá Admnistrador!</h1>
        <h3>O que deseja fazer hoje?</h3>
        <div className="tableContainer">
          <div className="tableBox">
            <form onSubmit={handleSubmitAdicionar}>
              <div className="productValues">
                <h2>Adicionar Produto</h2>

                <div className="valuesP">
                  <p>Nome</p>
                  <input type="text" required onChange={handleNomeChange} />
                </div>
                <div className="valuesP">
                  <p>Preço</p>
                  <input type="text" required onChange={handlePrecoChange} />
                </div>
                <div className="valuesP">
                  <p>Condição</p>
                  <input type="text" required onChange={handleCondicaoChange} />
                </div>
                <div className="valuesP">
                  <p>Local</p>
                  <input type="text" required onChange={handleLocalChange} />
                </div>
                <div className="valuesP">
                  <p>Tamanho</p>
                  <input type="text" required onChange={handleTamanhoChange} />
                </div>
                <div className="valuesP">
                  <p>Imagem</p>
                  <input
                    type="file"
                    name="image"
                    required
                    onChange={handleImagemChange}
                  />
                </div>
                <div className="valuesP">
                  <p>Tipo (Fazenda, kitnet ou terreno)</p>
                  <input type="text" required onChange={handleTipoChange} />
                </div>
                <button type="submit">Adicionar</button>
              </div>
            </form>
          </div>
          <div className="tableBox">
            <form onSubmit={handleSubmitAtualizar}>
              <div className="productValues">
                <h2>Atualizar Produto</h2>
                <div className="valuesP">
                  <p>Nome do Produto a ser atualizado</p>
                  <input type="text" required />
                </div>
                <div className="valuesP">
                  <p>Tipo do Produto a ser atualizado</p>
                  <input type="text" required />
                </div>
                <h3>Infomações Novas:</h3>
                <div className="valuesP">
                  <p>Nome</p>
                  <input type="text" required onChange={handleNomeChange} />
                </div>
                <div className="valuesP">
                  <p>Preço</p>
                  <input type="text" required onChange={handlePrecoChange} />
                </div>
                <div className="valuesP">
                  <p>Condição</p>
                  <input type="text" required onChange={handleCondicaoChange} />
                </div>
                <div className="valuesP">
                  <p>Local</p>
                  <input type="text" required onChange={handleLocalChange} />
                </div>
                <div className="valuesP">
                  <p>Tamanho</p>
                  <input type="text" required onChange={handleTamanhoChange} />
                </div>
                <div className="valuesP">
                  <p>Imagem</p>
                  <input
                    type="file"
                    name="image"
                    required
                    onChange={handleImagemChange}
                  />
                </div>
                <div className="valuesP">
                  <p>Tipo (Fazenda, kitnet ou terreno)</p>
                  <input type="text" required onChange={handleTipoChange} />
                </div>
                <button type="submit">Atualizar</button>
              </div>
            </form>
          </div>
          <div className="tableBox">
            <form onSubmit={handleSubmitRemover}>
              <div className="productValues">
                <h2>Remover Produto</h2>
                <div className="valuesP">
                  <p>Nome do Produto a ser removido</p>
                  <input type="text" name="nome" required />
                </div>
                <div className="valuesP">
                  <p>Tipo do Produto a ser removido</p>
                  <input type="text" name="tipo" required />
                </div>

                <button type="submit">Remover</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
