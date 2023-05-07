import React from "react";
import Card from "../../../card/card";
import avaliados from './avaliados.jpg'

function Avaliados(){
    return(
        <div>
            <h3>Avaliados</h3>  
        <div className="cardsf" >
         <Card imgCard={avaliados} tituloResenha="Titulo 1" pResenha="
         Amor, morte de si mesmo, solidão, finais doloridos e café (ou chá).
         Uma coletânea de prosas e poesias carregadas de sentimentos."/>
         <Card imgCard={avaliados} tituloResenha="Titulo 2" pResenha="
         Amor, morte de si mesmo, solidão, finais doloridos e café (ou chá).
         Uma coletânea de prosas e poesias carregadas de sentimentos."/>
         <Card imgCard={avaliados} tituloResenha="Titulo 3" pResenha="
         Amor, morte de si mesmo, solidão, finais doloridos e café (ou chá).
         Uma coletânea de prosas e poesias carregadas de sentimentos."/>
      </div>
      </div> 
    );
}

export default Avaliados; 