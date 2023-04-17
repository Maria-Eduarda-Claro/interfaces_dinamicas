import imagem from './crianca.png'
import style from './Blog.module.css'

function Blog(){

    return (
        <section>
            <img src={imagem} alt="Minha Imagem" className={style.img}/>
            <h1 className={style.h1}>Para ser muito bom amanha é preciso começar a praticar hoje</h1>
            <p className={style.prof}>Prof. Cleiton</p>
            <hr className={style.hr}/>
            <text className={style.p}>São nos primeiros anos escolares que as crianças aprendem os fundamentos da matemática, 
                inclusive as quatro operações - soma, subtração, multiplicação e divisão. 
                Qualquer dificuldade que a criança tenha nessa fase se refletirá por toda a sua vida escolar :(</text> 
               <text className={style.text}> Aqui você e seu filho irão encontrar exercícios relacionados ao conteúdo ensinado nós primeiros anos 
                escolares e buscara aperfeiçoar seu conhecimento nas operações básicas</text>
        </section>
        
        
    )
}

export default Blog;