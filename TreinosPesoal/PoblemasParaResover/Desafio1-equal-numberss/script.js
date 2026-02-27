let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let res = document.getElementById("res")
function verificar(){
    n1 = Number(num1.value)
    n2 = Number(num2.value)
    if(n1 == n2){
         res.innerText = "os numeros sao iguais"
}     else if(num1.value === 0 || num2.vaalue === 0){
    res.innerHTML ("numero invalido")
}

    else{
        res.innerText = "nao sao iguais"
    }

}



/*
RESPOSTA DO CHET GPT
function verificar() {
    // Primeiro pega os valores
    let n1 = num1.value
    let n2 = num2.value

    // Verifica se algum campo está vazio
    if (n1 === "" || n2 === "") {
        res.innerText = "❌ Número inválido"
        return
    }

    // Converte para número
    n1 = Number(n1)
    n2 = Number(n2)

    // Compara os números
    if (n1 == n2) {
        res.innerText = "✅ Os números são iguais"
    } else {
        res.innerText = "❌ Não são iguais"
    }
}
Pequei o Gpt Para aprofunda nos estudos
*/