import imagem from './calcular.png'
import style from './App.module.css'

function Header(){

    return (
        <section>
            <img src={imagem} alt="Minha Imagem"  className={style.img}/>
            <div className={style.div}>Ferramenta de aprendizagem de calculo
            </div>
            <p className={style.p}>14/04/2023</p>
            <hr className={style.hr}/>
        </section>
        
        
    )
}

export default Header;