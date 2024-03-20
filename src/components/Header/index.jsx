import { useState } from 'react';
import './index.css'

export function Header(){


    return (
        <header id="header">

            <section className="headerContent">
                <div className="logo">
                    <a href="/"><img src="public/medias/images/(Logo) Loja Limas.svg" alt=""></img></a>
                </div>

                <ul className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Contato</a></li>
                    <li><a href="/login">Entrar</a></li>
                </ul>

                <div className="menuMobile">
                    <img src="public/medias/images/menuIcon.svg" alt=""></img>

                    <div className="menuMobileContent">
                        <ul className="menuMobileContentOp">
                            <li><a href="/">Home</a></li>
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Contato</a></li>
                            <li><a href="/login">Entrar</a></li>
                        </ul>
                    </div>
                </div>

            </section>

            
        </header>
    )
}



