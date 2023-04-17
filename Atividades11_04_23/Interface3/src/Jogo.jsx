import style from './Jogo.module.css'

function Jogo(){

    return (
        <section>
            <p className={style.p}>Você tem 0 pontos</p>
            <button onClick={()=> console.log('fui clicado')}
            className={style.caixa}>Sortear Desafio</button>
            <hr className={style.hr} />
            <p className={style.quanto}>Quanto é:</p>
            <section>
                <text className={style.section}>50</text>
                <text className={style.mais}>{'\n'}+</text>
                <text className={style.nove}>{'\n'}9</text>
            </section>
            <p className={style.resposta}>Sua resposta: </p>
            <p className={style.resultado}>59</p>
            <button onClick={()=> console.log('fui clicado')} 
            className={style.validar}
            >Validar</button>
            <button onClick={()=> console.log('fui clicado')}
            className={style.novo}>Novo Jogo</button>
        </section>
        
        
    )
}

export default Jogo;