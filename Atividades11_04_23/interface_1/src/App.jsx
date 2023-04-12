import './global.css'
import Header from './Header'
import Header2 from './Header2'
import Box from'./box'
import Group from './Group'
import app from './App.module.css'
import Padding from './Padding'

 


function App(){
  return (
    <div style={{width:'100vw', height:'100vh'}} >
      <Header/>
      <Header2/>
      <div className={app.estilo}>
        <Box/>
        <Group/>
      </div>
      <Padding/>
    </div>
    

  )
}


export default App
