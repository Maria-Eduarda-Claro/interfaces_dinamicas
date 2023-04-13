import style from './App.module.css'
import MensagemEmpresa from './MensagemEmpresa';
import MensagemCliente from './MensagemCliente';


function App(){
  return(
    <main className={style.body}>
      <div className={style.header}> Atendimento
        <div className={style.box}>
          <MensagemEmpresa mensagem='Olá! Bem-vindo ao nosso chat! Estamos aqui para ajudá-lo e responder a todas as suas perguntas.'/>
          <MensagemCliente mensagem='Estou com dificuldade para acessar minha plataforma'/>
          <MensagemEmpresa mensagem='Consegue informar o CNPJ vinculado a sua conta?'/>
          <MensagemCliente mensagem='10.256.263/0001-65'/>
          <MensagemEmpresa mensagem='Aguarde um momento, estamos verificando.'/>

          <div className={style.boxTexto}> Informe sua mensagem

          </div>

        </div>

      </div>
        

        

    </main>
  )
}

export default App;