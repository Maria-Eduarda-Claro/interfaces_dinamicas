import style from './Tela.module.css'

function Tela(){

    console.log(style) //fora do return considera como é js

    return ( //dentro do return é hmtl
        <div style={{fontFamily:'monospace', color:'white', justifyContent:'flex-end', backgroundColor:'black', borderColor:'white'}} className={style.estilo}>
            0
        </div>
    )
}

export default Tela;