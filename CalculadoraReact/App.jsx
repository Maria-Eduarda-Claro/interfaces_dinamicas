import Tecla from "./Botao"
import Tela from './Tela'
import './Global.css'


function App() {

  return (
    <div style={{ FlexDirection: 'column', marginTop:'15%'}}>
      <div style={{minWidth:'430px'}}> 
        <h1 style={{margin:'0', textAlign: 'center', borderWidth: '1px', borderStyle: 'solid', 
        borderColor: 'white', marginLeft: '42%', marginRight: '43%', minWidth: '427px', borderRadius: '5px', fontFamily:'monospace', color:'white', backgroundColor:'black' }}>
          Calculadora</h1>
        <Tela/>
      </div>
      <div style={{ backgroundColor: '#272930', display: 'flex', marginLeft: '42%', marginRight: '43%', minWidth:'430px' }}>
        <div style={{fontFamily:'monospace'}}>
        <Tecla tecla='X-¹' />
          <Tecla tecla='9' />
          <Tecla tecla='6' />
          <Tecla tecla='3' />
          <Tecla tecla='0' />
          <Tecla tecla='EXP' />
          
        </div>
        <div style={{fontFamily:'monospace'}}>
        <Tecla tecla='nCr' />
          <Tecla tecla='.' />
          <Tecla tecla='7' />
          <Tecla tecla='4' />
          <Tecla tecla='1' />
          <Tecla tecla='Ans' />
        </div>
        <div style={{fontFamily:'monospace'}}>
        <Tecla tecla='X³' />
          <Tecla tecla='/' />
          <Tecla tecla='8' />
          <Tecla tecla='5' />
          <Tecla tecla='2' />
          <Tecla tecla='^' />
        </div>
        <div style={{fontFamily:'monospace', backgroundColor:'orange'}}>
        <Tecla tecla='AC' />
          <Tecla tecla='*' />
          <Tecla tecla='-' />
          <Tecla tecla='+' />
          <Tecla tecla='=' />
          <Tecla tecla='log' />
          
        </div>
      </div>
    </div>

  )
}

export default App
