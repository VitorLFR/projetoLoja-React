import '../components/Login/index.css'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [loginError, setLoginError] = useState(false);
    const navegacao = useNavigate();

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.get(`http://localhost:7000/users?nome=${nome}&senha=${senha}`);
            if (response.data.length > 0) {
                // se o login for certo
                navegacao('/Admin');
            } else {
                // Usuário ou senha incorretos
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