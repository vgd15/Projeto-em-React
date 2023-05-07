import React, { useContext } from "react";
import './header.css';
import { LidosLerContext } from "../menuLinks/pages/resenhas/LidosLerContext";

function Header(props) {
    const { qtdLidos, qtdLer } = useContext(LidosLerContext);

    return (
        <header>
            <img src={props.imagem} alt="Imagem Perfil" className="imgPerfil" />
            <h2>{props.nomePerfil}</h2>

            <div className="lerLidos">
                <div className="lidos">
                    <p>Lidos</p>
                    <p>{qtdLidos}</p>
                </div>
                <div className="ler">
                    <p>Vou ler</p>
                    <p>{qtdLer}</p>
                </div>
            </div>
        </header>
    );
}

export default Header;