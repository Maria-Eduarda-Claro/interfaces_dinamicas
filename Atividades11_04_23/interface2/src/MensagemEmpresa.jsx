import objeto from './MensagemEmpresa.module.css'

function MensagemEmpresa(props){
    return(
        <div className={objeto.estilo}>
            {props.mensagem}

        </div>
    )

}

export default MensagemEmpresa;
