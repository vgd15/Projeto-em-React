import React from "react";
import './Desejados.css';
import Card from "../../../card/card";
import desejados from './desejados.jpg';

function Desejados(){
         return(
            <div>
             <h3>Desejados</h3>
            <div className="cardsf">
                <Card  imgCard={desejados} tituloResenha="Título Desejados 1"
      pResenha="Charlie Mackesy oferece inspiração e esperança neste lindo livro, seguindo a história de um menino curioso"/>
                <Card  imgCard={desejados} tituloResenha="Título Desejados 2"
      pResenha="Charlie Mackesy oferece inspiração e esperança neste lindo livro, seguindo a história de um menino curioso"/>
                <Card  imgCard={desejados} tituloResenha="Titulo    Desejados 3"
      pResenha="Charlie Mackesy oferece inspiração e esperança neste lindo livro, seguindo a história de um menino curioso"/>
            </div>
            </div>
         );
}

export default Desejados;