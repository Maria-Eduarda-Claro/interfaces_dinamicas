import lista from "./Lista.module.css"

function Itens(props){
    return(
        <section className={lista.main}>
            <article className={lista.produto}>
                <label></label>
                <p>{props.product.produto}</p>
            </article>
            <article className={lista.quantidade}>
                <p>Quantidade <br />{props.product.quantidade} UN</p>
            </article>
            <article className={lista.valor}>
                <p>Valor unitário <br /> R${props.product.valor}</p>
            </article>
            <article className={lista.total}>
                <label>Total</label>
            </article>
        </section>
    )
}

export default Itens