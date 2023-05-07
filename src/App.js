import './App.css';
import Header from './components/cabecalho/header';
import Card from './components/card/card';
import Estante from './components/menuLinks/estante/Estante';
import imagemPerfil from './imagemPerfil.jpg';
import card1 from './components/card/img/card1.jpg';
import card2 from './components/card/img/card2.jpg';
import BotoesLinks from './components/menuLinks/botoes/Botoes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favoritos from './components/menuLinks/pages/favoritos/Favoritos';
import Desejados from './components/menuLinks/pages/desejados/Desejados';
import Resenhas from './components/menuLinks/pages/resenhas/Resenhas';
import Avaliados from './components/menuLinks/pages/avaliados/Avaliados';
import { LidosLerProvider} from './components/menuLinks/pages/resenhas/LidosLerContext';

function App() {
  return (
    <div className="App">
      <LidosLerProvider>
      <Router>
      <Header imagem={imagemPerfil} nomePerfil="Deise Duarte" />
      <div className="linha">
        <hr></hr>
      </div>

      <div className='container1'>
      <div className='box3'>
      <BotoesLinks/>
      </div>

      <div className='box4'>

      <Routes>
            <Route path='/' element={<Estante titulo="Minha Estante"/>} />
            <Route path='/Projeto-em-React' element={<Estante titulo="Minha Estante"/>} />
            <Route path='/favoritos' element={<Favoritos/>} />
            <Route path='/desejados' element={<Desejados/>} />
            <Route path='/avaliados' element={<Avaliados/>} />
            <Route path='/resenhas' element={<Resenhas/>} />
      </Routes>
      </div>
      
      </div>
      <p className='titulo2'> Últimas Avaliações </p>
      <div className='box1'>
      <Card  imgCard={card1} tituloResenha="Título da Resenha"
      pResenha="Kyle e Kimberly são o casal perfeito. Pelo menos, é o que Kyle acha. Por isso, quando Kimberly termina com ele na noite da festa de formatura, o mundo inteiro do garoto vira de cabeça para baixo - literalmente. O carro deles capota após sofrerem um acidente e, quando Kyle acorda no hospital, descobre que teve uma lesão cerebral. Kimberly está morta. E ninguém consegue entender a sua dor."/>
      </div>
      <div className='box2'>
      <Card imgCard={card2} tituloResenha="Título da Resenha"
      pResenha="Ao longo de cinco noites, eles discutem temas como autoestima, raiva, autoaceitação e complexo de inferioridade. Aos poucos, fica claro que libertar-se das expectativas alheias e das dúvidas que nos paralisam e encontrar a coragem para mudar está ao alcance de todos."/>
      </div>
   

    </Router>
    </LidosLerProvider>
    </div>
  );
}

export default App;
