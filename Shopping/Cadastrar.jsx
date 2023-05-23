import { useState } from "react"
import Itens from "./Itens"
import cadastro from "./Cadastro.module.css"


function cadastrar(){
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

    const limpaLista = () => {
        setListaProdutos([])
    }


    return(
        <main className={cadastro.boxMain}>
            <section className={cadastro.main}>
                <h1>Lista de Compras</h1>
                <div className={cadastro.boxProduto}>   
                    <label className={cadastro.lbProduto}>Informe o Produto <br /></label>
                    <input type="text" value={produto} onChange={(e) => modificarProduto(e.target.value)}/>
                </div>

                <div className={cadastro.qtv}>
                    <div className={cadastro.boxQuantidade}>
                        <label>Informe a Quantidade <br /></label>
                        <input type="text"value={quantidade} onChange={(e) => setQuantidade(e.target.value)}/>
                    </div>  
                    <div className={cadastro.boxValor}>
                        <label>Informe o Valor  </label>
                        <input type="text" value={valor} onChange={(e) => setValor(e.target.value)}/>
                    </div>                  
                </div>
                <div>
                    <button className={cadastro.boxButtonAdd} type="button" onClick={adicionarProduto}>CADASTRAR</button>
                </div>    
                <div>
                    <button className={cadastro.boxButtonClean} type="button" onClick={limpaLista}>LIMPAR</button>
                </div>                

            </section>
            <div className={cadastro.boxLista}>
                {
                    listaProdutos.map( (product) => (
                        <Itens product={product}/>
                    ))
                }
            </div>
        </main>
    )
}

export default cadastrar