// Importa o arquivo de estilos para este componente
import '../components/Login/index.css'

// Importa a biblioteca axios para realizar requisições HTTP
import axios from 'axios';

// Importa o hook useState do React para gerenciar estados em componentes funcionais
import { useState } from 'react';

// Importa o hook useNavigate do React Router para permitir a navegação programática
import { useNavigate } from 'react-router-dom';

// Componente de Login responsável pela autenticação de usuários
export function Login() {
    // Estados para o nome de usuário, senha e erro de login
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [loginError, setLoginError] = useState(false);
    
    // Usando o useNavigate para navegar para outra página após o login bem-sucedido
    const navegacao = useNavigate();

    // Função para lidar com a mudança no campo de nome de usuário
    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    // Função para lidar com a mudança no campo de senha
    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    // Função para lidar com o envio do formulário de login
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Realiza uma requisição GET para verificar as credenciais do usuário
            const response = await axios.get(`http://localhost:7000/users?nome=${nome}&senha=${senha}`);
            if (response.data.length > 0) {
                // Se as credenciais estiverem corretas, navega para a página de administração
                navegacao('/Admin');
            } else {
                // Caso contrário, exibe uma mensagem de erro
                setLoginError(true);
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
        }
    };

    return (
        <main>

            <section className="barraInicio">

                <div className="barraInicioContent">
                    <div className="iconInicio">
                        <img src="/public/medias/images/iconCasa.svg" alt="" id="iconCasa"></img>
                    </div>

                    <h2>Bem vindo a melhor loja de imóveis do Brasil</h2>
                </div>
            </section>

            <section className="categorias">

                <div className="box-containerL">

                    <div className="containerL">
                        <div className="icon">
                            <img src="public/medias/images/entrarIcon.svg" alt="" id="boxEntrar"></img>
                        </div>

                        <div className="containerInfo">

                            <div className="containerLogin">
                                <form onSubmit={handleSubmit}>
                                    <section className="form-control">
                                        <p>NOME</p>
                                        <input type="text" required id="nomel" value={nome} onChange={handleNomeChange} />
                                    </section>

                                    <section className="form-control">
                                        <p>SENHA</p>
                                        <input type="password" required id="SenhaL" value={senha} onChange={handleSenhaChange} />
                                    </section>

                                    {loginError && <p style={{ color: 'red' }}>Usuário ou senha incorretos</p>}

                                    <button type="submit">CONTINUAR</button>
                                </form>
                            </div>

                        </div>
                    </div>



                </div>

                <h1>Não tem uma conta ainda?</h1>
                <a href="/signup">Cadaste-se aqui.</a>
            </section>

        </main>
    )
}