import style from './Botao.module.css'

function Tecla(props){

    return (
        <div className={style.estilo}>
            {props.tecla}
        </div>

    )
}

export default Tecla;