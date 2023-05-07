import React from "react";
import './livros.css'
function Livros(props){
     return(
        <img src={props.livro} alt="livros" />
     );
}

export default Livros;