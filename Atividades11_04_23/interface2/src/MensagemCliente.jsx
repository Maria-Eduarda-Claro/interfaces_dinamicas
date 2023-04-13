import objeto from './MensagemCliente.module.css'

function MensagemCliente(props){
    return(
        <div className={objeto.estilo}>
            {props.mensagem}

        </div>
    )
}

export default MensagemCliente;