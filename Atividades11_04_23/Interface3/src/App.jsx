import style from './App.module.css'
import Blog from './Blog';
import Header from './Header.jsx'
import Jogo from './Jogo';


function App() {

  return (
    <div className={style.fundo}>
      <div className={style.caixaRoxa}>
      </div>
      <div>
        <Header/>
        <Blog/>
        <Jogo/>
        <br />
      </div>
    </div>
  
  )
}

export default App; 