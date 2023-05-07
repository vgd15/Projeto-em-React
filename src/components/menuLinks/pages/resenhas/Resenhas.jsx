import React from "react";
import Card from "../../../card/card";
import resenhas from './resenhas.jpg';
import BotoesLidosLer from "./botoesLidosLer";

function Resenhas() {
    return (
        <div className="resenhas">
            <h3> Resenhas </h3>
            <div className="cardsf" >
                <Card imgCard={resenhas} tituloResenha="As coisas que você só vê quando desacelera" pResenha="
         Você vai descobrir que a forma como percebemos o mundo é um reflexo do que se passa em nossa mente. Quando nossa mente está alegre e compassiva, o mundo também está. Quando ela está repleta de pensamentos negativos, o mundo parece sombrio. E quando nossa mente descansa, o mundo faz o mesmo.
          
         Um livro para os dias de hoje, repleto de verdades universais, lindamente escrito e ilustrado. Cada parágrafo possui a própria semente, que cria raízes para a sabedoria mais profunda e atemporal. Uma obra para se ter sempre à mão "/>
            </div>
            <div className="botoeslidosler">
                <BotoesLidosLer />
            </div>
        </div>
    );
}

export default Resenhas; 