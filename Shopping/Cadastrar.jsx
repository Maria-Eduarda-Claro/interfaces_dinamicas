import { useState } from "react"
import Itens from "./Itens"
import cadastro from "./Cadastro.module.css"

function Cadastrar(){
    const [produto, setProduto] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [valor, setValor] = useState("");
    const [listaProdutos, setListaProdutos] = useState([]);

    function modificarProduto(produto){
        setProduto(produto);
    }

    const adicionarProduto = () => {
        setProduto("")
        setQuantidade("")
        setValor("")

        setListaProdutos ([
            {
                produto,
                quantidade,
                valor
            }, ...listaProdutos
        ])
    }


    return(
        <main className={cadastro.estilo}>
            <section className={cadastro.main}>

                <h1>LISTA DE COMPRAS</h1>
                <div className={cadastro.produto}>
                    <label>Informe o Produto <br /></label>
                    <input type="text" value={produto} onChange={(e) => modificarProduto(e.target.value)}/>
                </div>

                <div className={cadastro.qtv}>
                    <label>Informe a Quantidade <br /></label>
                    <input type="text"value={quantidade} onChange={(e) => setQuantidade(e.target.value)}/>
                    <label>Informe o Valor  </label>
                    <input type="text" value={valor} onChange={(e) => setValor(e.target.value)}/>
                </div>

                <button type="button" onClick={adicionarProduto}>Cadastrar</button>
                <button type="button">Limpar</button>

            </section>
            <div className={cadastro.lista}>
                {
                    listaProdutos.map( (product) => (
                        <Itens product={product}/>
                    ))
                }
            </div>
        </main>
    )
}

export default Cadastrar