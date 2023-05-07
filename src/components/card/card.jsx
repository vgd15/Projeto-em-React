import React from "react";
import './card.css';
import Avaliacao from "../avaliacao/avaliação";


function Card(props){
    return(

      <div className="cards">
        <div className="card">
         <img src={props.imgCard} alt="imagem card 1" className="imgCard"/>
         <div className="avaliacao">
         <Avaliacao avaliacao="5"/>
         </div>
         </div>
         <div className="Resenha">
         <h6>{props.tituloResenha}</h6>
         <p className="pResenha">{props.pResenha}</p>
         </div>
         </div>        
    
       

       

    );
};

export default Card;