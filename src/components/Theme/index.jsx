// Importa o hook useEffect do React para lidar com efeitos colaterais em componentes funcionais
import { useEffect } from 'react';

// Componente responsável por gerenciar o tema da aplicação
export function Theme() {
    // Função para obter um elemento do DOM pelo ID
    const getElementByIdSimple = (id) => document.getElementById(id);

    // Objeto contendo os IDs dos elementos do DOM
    const elements = {
        themeIcon: 'themeIcon',
        entrarIcon: 'boxEntrar',
        signupIcon: 'boxCadastrar',
        boxFazenda: 'boxFazenda',
        boxTerreno: 'boxTerreno',
        boxKitnet: 'boxKitnet',
        iconCasa: 'iconCasa',
        aboutIcon: 'aboutIcon',
        returnBtn: 'returnBtn'
    };

    // Variável para contar o número de mudanças de tema
    let count = parseInt(window.localStorage.getItem("themeCount")) || 1;

    // Função para mudar o tema
    function mudarTema() {
        // Incrementa o contador de mudanças de tema
        count++;
        // Armazena o contador no armazenamento local
        window.localStorage.setItem('themeCount', count.toString());
        // Recarrega a página para aplicar o novo tema
        window.location.reload();
    }

    // Função para definir o atributo 'src' de um elemento do DOM
    function setElementSrc(elementId, src) {
        const element = getElementByIdSimple(elementId);
        if (element) {
            element.src = src;
        }
    }

    // Efeito colateral para mudar o tema quando 'count' é alterado
    useEffect(() => {
        // Chama a função para mudar o tema
        changeTheme();
    }, [count]);

    // Função para mudar o tema com base no valor de 'count'
    function changeTheme() {
        // Determina o caminho do tema com base no valor de 'count'
        const themePath = count % 2 === 0 ? 'theme01' : '';

        // Define as variáveis de estilo do CSS com base no tema
        document.documentElement.style.setProperty("--corFundo", count % 2 === 0 ? "linear-gradient(to bottom, black, black, #02A9EA)" : "linear-gradient(to bottom, white, white, #2ec4b574)");
        document.documentElement.style.setProperty("--cor01", count % 2 === 0 ? "#0C0F30" : "#032612");
        document.documentElement.style.setProperty("--cor02", count % 2 === 0 ? "#1D2575" : "#009688");
        document.documentElement.style.setProperty("--cor03", count % 2 === 0 ? "#3D4CF5" : "#00E3CC");
        document.documentElement.style.setProperty("--corFonte01", "white");
        document.documentElement.style.setProperty("--corFonte02", count % 2 === 0 ? "white" : "black");
        document.documentElement.style.setProperty("--corFonte03", "#BCC5CE");

        // Atualiza os 'src' dos elementos do DOM com base no tema
        setElementSrc(elements.themeIcon, `public/medias/images/${themePath}/TEMA.png`);
        setElementSrc(elements.entrarIcon, `public/medias/images/${themePath}/entrarIcon.svg`);
        setElementSrc(elements.signupIcon, `public/medias/images/${themePath}/signupIcon.svg`);
        setElementSrc(elements.boxFazenda, `public/medias/images/${themePath}/boxFazenda.svg`);
        setElementSrc(elements.boxTerreno, `public/medias/images/${themePath}/boxTerreno.svg`);
        setElementSrc(elements.boxKitnet, `public/medias/images/${themePath}/boxKitnet.svg`);
        setElementSrc(elements.iconCasa, `public/medias/images/${themePath}/iconCasa.svg`);
        setElementSrc(elements.aboutIcon, `public/medias/images/${themePath}/aboutIcon.svg`);
        setElementSrc(elements.returnBtn, `public/medias/images/${themePath}/returnBtn.svg`);
    }

    // Renderiza o componente Theme
    return (
        <>
            <div className="theme">
                {/* Botão para mudar o tema */}
                <button id="themeChanger" onClick={mudarTema}><img src="public/medias/images/TEMA.png" alt="" id="themeIcon"></img></button>
            </div>
        </>
    )
}
