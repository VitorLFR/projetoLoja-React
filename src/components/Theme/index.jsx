import { useEffect } from 'react';

export function Theme() {
    const getElementByIdSimple = (id) => document.getElementById(id);

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

    let count = parseInt(window.localStorage.getItem("themeCount")) || 1;

    function mudarTema() {
        count++;
        window.localStorage.setItem('themeCount', count.toString());
        console.log(window.localStorage.getItem("themeCount"))
        window.location.reload();
    }

    function setElementSrc(elementId, src) {
        const element = getElementByIdSimple(elementId);
        if (element) {
            element.src = src;
        }
    }

    useEffect(() => {
        changeTheme();
    }, [count]); // Chamado sempre que 'count' for alterado

    function changeTheme() {
        const themePath = count % 2 === 0 ? 'theme01' : '';

        document.documentElement.style.setProperty("--corFundo", count % 2 === 0 ? "linear-gradient(to bottom, black, black, #02A9EA)" : "linear-gradient(to bottom, white, white, #2ec4b574)");
        document.documentElement.style.setProperty("--cor01", count % 2 === 0 ? "#0C0F30" : "#032612");
        document.documentElement.style.setProperty("--cor02", count % 2 === 0 ? "#1D2575" : "#009688");
        document.documentElement.style.setProperty("--cor03", count % 2 === 0 ? "#3D4CF5" : "#00E3CC");
        document.documentElement.style.setProperty("--corFonte01", "white");
        document.documentElement.style.setProperty("--corFonte02", count % 2 === 0 ? "white" : "black");
        document.documentElement.style.setProperty("--corFonte03", "#BCC5CE");

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

    return (
        <>
            <div className="theme">
                <button id="themeChanger" onClick={mudarTema}><img src="public/medias/images/TEMA.png" alt="" id="themeIcon"></img></button>
            </div>
        </>
    )
}
