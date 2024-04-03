import { useState } from "react";
import "../components/Admin/Admin.css";
import axios from "axios";

export function Admin() {
  const [formDataAdicionar, setFormDataAdicionar] = useState({
    nome: "",
    preco: "",
    condicao: "",
    local: "",
    tamanho: "",
    imagem: "",
    tipo: "",
  });

  const [formDataAtualizar, setFormDataAtualizar] = useState({
    nome: "",
    tipo: "",
    novoNome: "",
    novoPreco: "",
    novaCondicao: "",
    novoLocal: "",
    novoTamanho: "",
    novaImagem: "",
    novoTipo: "",
  });

  const [formDataRemover, setFormDataRemover] = useState({
    nome: "",
    tipo: "",
  });

  const handleInputChangeAdicionar = (event) => {
    const { name, value } = event.target;
    setFormDataAdicionar((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleInputChangeAtualizar = (event) => {
    const { name, value } = event.target;
    setFormDataAtualizar((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleInputChangeRemover = (event) => {
    const { name, value } = event.target;
    setFormDataRemover((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmitAdicionar = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:7000/${formDataAdicionar.tipo.toLowerCase()}s`,
        formDataAdicionar
      );
      console.log("Operação realizada:", response.data);
      console.log("Imagem: ", formDataAdicionar.imagem)
      alert("Produto adicionado com sucesso");
      setFormDataAdicionar({
        nome: "",
        preco: "",
        condicao: "",
        local: "",
        tamanho: "",
        imagem: "",
        tipo: "",
      });
    } catch (error) {
      console.error("Erro ao realizar operação", error);
    }
  };

  const handleSubmitAtualizar = async (event) => {
    event.preventDefault();
  
    try {
  
      const response = await axios.get(
        `http://localhost:7000/${formDataAtualizar.tipo.toLowerCase()}s?nome=${formDataAtualizar.nome}`
      );
  
      if (response.data.length === 0) {
        alert("Produto não encontrado");
        return;
      }
  
      const produto = response.data[0];
      const produtoId = produto.id;
  

      const dadosAtualizados = {
        nome: formDataAtualizar.novoNome || produto.nome,
        preco: formDataAtualizar.novoPreco || produto.preco,
        condicao: formDataAtualizar.novaCondicao || produto.condicao,
        local: formDataAtualizar.novoLocal || produto.local,
        tamanho: formDataAtualizar.novoTamanho || produto.tamanho,
        imagem: formDataAtualizar.novaImagem || produto.imagem,
        tipo: formDataAtualizar.novoTipo || produto.tipo,
      };
  
      // Atualiza o produto usando o ID obtido
      const atualizacaoResponse = await axios.put(
        `http://localhost:7000/${formDataAtualizar.tipo.toLowerCase()}s/${produtoId}`,
        dadosAtualizados
      );
  
      console.log("Operação realizada:", atualizacaoResponse.data);
  
      alert("Produto atualizado com sucesso");
      setFormDataAtualizar({
        nome: "",
        tipo: "",
        novoNome: "",
        novoPreco: "",
        novaCondicao: "",
        novoLocal: "",
        novoTamanho: "",
        novaImagem: "",
        novoTipo: "",
      });
    } catch (error) {
      console.error("Erro ao realizar operação", error);
    }
  };

  const handleSubmitRemover = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:7000/${formDataRemover.tipo.toLowerCase()}s?nome=${formDataRemover.nome}`
      );

      console.log("Resposta da requisição GET:", response.data);

      if (response.data.length === 0) {
        alert("Produto não encontrado");
        return;
      }

      const produto = response.data[0];
      console.log("Produto encontrado:", produto);

      const produtoId = produto.id;
      console.log("ID do produto:", produtoId);

      await axios.delete(
        `http://localhost:7000/${formDataRemover.tipo.toLowerCase()}s/${produtoId}`
      );

      console.log("Produto removido com sucesso");
      alert("Produto Removido com sucesso")
      setFormDataRemover({
        nome: "",
        preco: "",
        condicao: "",
        local: "",
        tamanho: "",
        imagem: "",
        tipo: "",
      });
    } catch (error) {
      console.log("Erro ao realizar operação", error);
      alert("Não foi possível remover o produto")
    }
  };


  return (
    <main className="AdminPage">
      <section className="ProductTable">
        <h1>Olá Administrador!</h1>
        <h3>O que deseja fazer hoje?</h3>
        <div className="tableContainer">
          <div className="tableBox">
            <form onSubmit={handleSubmitAdicionar}>
              <div className="productValues">
                <h2>Adicionar Produto</h2>
                <div className="valuesP">
                  <p>Nome</p>
                  <input type="text" name="nome" value={formDataAdicionar.nome} onChange={handleInputChangeAdicionar} required />
                </div>
                <div className="valuesP">
                  <p>Preço</p>
                  <input type="text" name="preco" value={formDataAdicionar.preco} onChange={handleInputChangeAdicionar} required />
                </div>
                <div className="valuesP">
                  <p>Condição</p>
                  <input type="text" name="condicao" value={formDataAdicionar.condicao} onChange={handleInputChangeAdicionar} required />
                </div>
                <div className="valuesP">
                  <p>Local</p>
                  <input type="text" name="local" value={formDataAdicionar.local} onChange={handleInputChangeAdicionar} required />
                </div>
                <div className="valuesP">
                  <p>Tamanho</p>
                  <input type="text" name="tamanho" value={formDataAdicionar.tamanho} onChange={handleInputChangeAdicionar} required />
                </div>
                <div className="valuesP">
                  <p>Imagem (URL)</p>
                  <input type="text" name="imagem" required onChange={handleInputChangeAdicionar} />
                </div>
                <div className="valuesP">
                  <p>Tipo (Fazenda, kitnet ou terreno)</p>
                  <input type="text" name="tipo" value={formDataAdicionar.tipo} onChange={handleInputChangeAdicionar} required />
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
                  <input type="text" required name="nome" onChange={handleInputChangeAtualizar} value={formDataAtualizar.nome} />
                </div>
                <div className="valuesP">
                  <p>Tipo do Produto a ser atualizado</p>
                  <input type="text" required name="tipo" onChange={handleInputChangeAtualizar} value={formDataAtualizar.tipo} />
                </div>
                <h3>Informações Novas:</h3>
                <div className="valuesP">
                  <p>Novo Nome</p>
                  <input type="text" required name="novoNome" onChange={handleInputChangeAtualizar} value={formDataAtualizar.novoNome} />
                </div>
                <div className="valuesP">
                  <p>Novo Preço</p>
                  <input type="text" required name="novoPreco" onChange={handleInputChangeAtualizar} value={formDataAtualizar.novoPreco} />
                </div>
                <div className="valuesP">
                  <p>Nova Condição</p>
                  <input type="text" required name="novaCondicao" onChange={handleInputChangeAtualizar} value={formDataAtualizar.novaCondicao} />
                </div>
                <div className="valuesP">
                  <p>Novo Local</p>
                  <input type="text" required name="novoLocal" onChange={handleInputChangeAtualizar} value={formDataAtualizar.novoLocal} />
                </div>
                <div className="valuesP">
                  <p>Novo Tamanho</p>
                  <input type="text" required name="novoTamanho" onChange={handleInputChangeAtualizar} value={formDataAtualizar.novoTamanho} />
                </div>
                <div className="valuesP">
                  <p>Nova Imagem (URL)</p>
                  <input type="text" name="novaImagem" required onChange={handleInputChangeAtualizar} value={formDataAtualizar.novaImagem} />
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
                  <input type="text" name="nome" required value={formDataRemover.nome} onChange={handleInputChangeRemover} />
                </div>
                <div className="valuesP">
                  <p>Tipo do Produto a ser removido</p>
                  <input type="text" name="tipo" required value={formDataRemover.tipo} onChange={handleInputChangeRemover} />
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