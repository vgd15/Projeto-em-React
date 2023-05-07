import React from "react";
import './Estante.css';
import Livros from "../../livros/livros";
import livro1 from '../img/livro1.jpg';
import livro2 from '../img/livro2.jpg';
import livro3 from '../img/livro3.jpg';
import livro4 from '../img/livro4.jpg';
import livro5 from '../img/livro5.jpg';
import livro6 from '../img/livro6.jpg';
import livro7 from '../img/livro7.jpg';
import livro8 from '../img/livro8.jpg';
import livro9 from '../img/livro9.jpg';
import livro10 from '../img/livro10.jpg';
import Avaliacao from "../../avaliacao/avaliação";



function Estante(props) {
  return (
    <div className="menu">
      <h5>{props.titulo}</h5>
      <div className="container">
        <div className="blocoLivros">
          <div className="coluna1">
            <div className="livros-container">
              <Livros livro={livro1} />
              <div className="avaliacao">
                <Avaliacao avaliacao="5" />
              </div>
            </div>
            <div className="livros-container">
              <Livros livro={livro2} />
              <div className="avaliacao">
                <Avaliacao avaliacao="4" />
              </div>
            </div>
            <div className="livros-container">
              <Livros livro={livro3} />
              <div className="avaliacao">
                <Avaliacao avaliacao="3" />
              </div>
            </div>
            <div className="livros-container">
              <Livros livro={livro4} />
              <div className="avaliacao">
                <Avaliacao avaliacao="5" />
              </div>
            </div>
            <div className="livros-container">
              <Livros livro={livro5} />
              <div className="avaliacao">
                <Avaliacao avaliacao="4" />
              </div>
            </div>
          </div>
          <div className="coluna2">
            <div className="livros-container">
              <Livros livro={livro6} />
              <div className="avaliacao">
                <Avaliacao avaliacao="5" />
              </div>
            </div>
            <div className="livros-container">
              <Livros livro={livro7} />
              <div className="avaliacao">
                <Avaliacao avaliacao="5" />
              </div>
            </div>
            <div className="livros-container">
              <Livros livro={livro8} />
              <div className="avaliacao">
                <Avaliacao avaliacao="5" />
              </div>
            </div>
            <div className="livros-container">
              <Livros livro={livro9} />
              <div className="avaliacao">
                <Avaliacao avaliacao="5" />
              </div>
            </div>
            <div className="livros-container">
              <Livros livro={livro10} />
              <div className="avaliacao">
                <Avaliacao avaliacao="5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Estante;