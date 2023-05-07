import React from "react";
import './botao.css';
import { FaComment, FaHeart, FaStar, FaGift, FaHome } from "react-icons/fa";
import {Link} from 'react-router-dom'


function BotoesLinks(){
    return(
        <div className="botoesLinks">
    
          <ul>
          <li>
              <Link to="/projeto-com-React">
                <button>{<FaHome/>} Home </button>
              </Link>
            </li>
            <li>
              <Link to="/favoritos">
                <button >{<FaHeart/>} Favoritos </button>
              </Link>
            </li>
            <li>
              <Link to="/desejados">
                <button >{<FaGift/>} Desejados </button>
              </Link>
            </li>
            <li>
              <Link to="/avaliados">
                <button >{<FaStar/>} Avaliados </button>
              </Link>
            </li>
            <li>
              <Link to="/resenhas">
                <button>{<FaComment/>} Resenhas </button>
              </Link>
            </li>
          </ul>

      </div>
    );
}

export default BotoesLinks;