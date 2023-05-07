import React from "react";
import {FaStar} from "react-icons/fa";


function Avaliacao(props){

let avaliacao=props.avaliacao

const icones=[];
for (let i=0; i < avaliacao; i++)

icones.push(<FaStar key={i} color="gold" size="20px"/>);

return (icones);
  
}

export default Avaliacao;