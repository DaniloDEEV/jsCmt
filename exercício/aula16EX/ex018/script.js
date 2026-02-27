
let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista") 
let res = document.querySelector("div#res")
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    } else {
         return false
    }
}

function inlista(n, l){
    if (l.indexOf(Number(n)) !=-1){
return true
}else {
    return false
}
}

function adicionar(){
if(isNumero(num.value) && !inlista(num.value, valores)){
valores.push(Number(num.value))
let item = document.createElement("option")
item.text = `valor ${num.value} foi adicionado`
lista.appendChild(item)
res.innerHTML = ""
}else{
    window.alert("numero invalido")
}
num.value = ""
num.focus()
} 
function finalizar(){
    if(valores.length == 0){
        alert("adicioner valores andes de finalizar")
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let po in valores){
            soma += valores[po]
        if(valores[po]> maior)
                maior = valores[po]
            else if(valores[po]< menor)
                menor = valores[po]
        }
        media = soma / tot 
        res.innerHTML = ``
        res.innerHTML +=`<p>ao todo temos <strong>${tot}</strong> numeros cadastrados<p/>`
        res.innerHTML += `<p>o menor valor e ${menor}</p>`
        res.innerHTML += `<p>o maior valor e ${maior}</p>`
         res.innerHTML += `<p>somado os valores temos  ${soma}</p>`
         res.innerHTML += `<p>aa media e ${media}</p>`
    }
}