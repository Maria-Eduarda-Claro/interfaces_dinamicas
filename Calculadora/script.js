function somar (){

        let primeiroValor = 
        document.getElementById('primeiroValor').value;

        let segundoValor =
        document.getElementById('segundoValor').value;

        const resultado = parseFloat (primeiroValor) 
                            + parseFloat (segundoValor);

        document.getElementById('resultado').value = resultado;
}

function subtrair(){

    let primeiroValor = 
        document.getElementById('primeiroValor').value;

        let segundoValor =
        document.getElementById('segundoValor').value;

        const resultado = parseFloat (primeiroValor) 
                            - parseFloat (segundoValor);

        document.getElementById('resultado').value = resultado;

}

function dividir(){

    let primeiroValor = 
    document.getElementById('primeiroValor').value;

    let segundoValor =
    document.getElementById('segundoValor').value;
    
    if( segundoValor ==0){
        alert('Não é possível dvisão por zero');
    }else{
        const resultado = parseFloat (primeiroValor) 
                        / parseFloat (segundoValor);
                        document.getElementById('resultado').value = resultado;
    }
}