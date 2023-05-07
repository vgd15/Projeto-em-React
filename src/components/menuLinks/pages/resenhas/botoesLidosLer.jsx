import React, { useContext } from "react";
import { LidosLerContext } from "./LidosLerContext";

import './botoesLidosLer.css';

function BotoesLidosLer() {
    const { qtdLidos, setQtdLidos, qtdLer, setQtdLer } = useContext(LidosLerContext);

    function handleClickLidos() {
        setQtdLidos(qtdLidos + 1);
    }

    function handleClickLer() {
        setQtdLer(qtdLer + 1);
    }

    return (
        <div className="botaosGeral">
            <div className="lidos">
                <button className="botaolidos" onClick={handleClickLidos}>Marcar como Lido</button>
            </div>
            <div className="ler">
                <button className="botaoler" onClick={handleClickLer}>Vou ler</button>
                
            </div>
        </div>
    );
}

export default BotoesLidosLer;
