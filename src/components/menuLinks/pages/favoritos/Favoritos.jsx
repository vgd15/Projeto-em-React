import React from "react";
import Card from "../../../card/card";
import favoritos from './favoritos.jpg';
import './favoritosStyle.css';


function Favoritos(){
    return(
        <div>
         <h3>Favoritos</h3>
        <div className="cardsf" >
         <Card imgCard={favoritos} tituloResenha="Titulo 1" pResenha="
         Amor, morte de si mesmo, solidão, finais doloridos e café (ou chá).
         Uma coletânea de prosas e poesias carregadas de sentimentos."/>
         <Card imgCard={favoritos} tituloResenha="Titulo 2" pResenha="
         Amor, morte de si mesmo, solidão, finais doloridos e café (ou chá).
         Uma coletânea de prosas e poesias carregadas de sentimentos."/>
         <Card imgCard={favoritos} tituloResenha="Titulo 3" pResenha="
         Amor, morte de si mesmo, solidão, finais doloridos e café (ou chá).
         Uma coletânea de prosas e poesias carregadas de sentimentos."/>
      </div> 
      </div>
    );
}

export default Favoritos; 