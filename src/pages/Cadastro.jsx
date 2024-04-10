// Importa a biblioteca axios para realizar requisições HTTP
import axios from "axios";

// Importa o hook useState do React para gerenciar estados em componentes funcionais
import { useState } from "react";

// Componente de Cadastro de Usuário
export function Cadastro() {
  // Estados para o nome, senha e verificação de nome existente
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeExistente, setNomeExistente] = useState(false);

  // Função para atualizar o estado do nome conforme o usuário digita
  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  // Função para atualizar o estado da senha conforme o usuário digita
  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
  };

  // Função para submeter o formulário de cadastro de usuário
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Verifica se o nome de usuário já existe
      const response = await axios.get(
        `http://localhost:7000/users?nome=${nome}`
      );
      if (response.data.length > 0) {
        setNomeExistente(true);
      } else {
        // Se o nome de usuário não existe, realiza a requisição POST para cadastrar o usuário
        const response = await axios.post("http://localhost:7000/users", {
          nome: nome,
          senha: senha,
        });
        console.log("Usuário cadastrado com sucesso:", response.data);

        alert("Usuário criado com sucesso");
        // Limpa os campos de entrada após o envio do formulário
        setNome("");
        setSenha("");
        setNomeExistente(false);
      }
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
    }
  };


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

      <section className="categorias">
        <div className="box-containerL">
          <div className="containerL">
            <div className="icon">
              <img
                src="public/medias/images/signupIcon.svg"
                alt=""
                id="boxCadastrar"
              ></img>
            </div>

            <div className="containerInfo">
              <div className="containerLogin">
                <form onSubmit={handleSubmit}>
                  <section className="form-control">
                    <p>NOME</p>
                    <input
                      type="text"
                      id="nomel"
                      required
                      value={nome}
                      onChange={handleNomeChange}
                    />
                    {nomeExistente && (
                      <p style={{ color: "red" }}>Nome de usuário já existe</p>
                    )}
                  </section>

                  <section className="form-control">
                    <p>SENHA</p>
                    <input
                      type="password"
                      id="SenhaL"
                      required
                      value={senha}
                      onChange={handleSenhaChange}
                    />
                  </section>

                  <button type="submit">CONTINUAR</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <h1>Já tem uma conta?</h1>
        <a href="/login">Entre aqui.</a>
      </section>
    </main>
  );
}
