
function clicar(){
let ini = document.getElementById("botao1")
let fim = document.getElementById("botao2")
let passo = document.getElementById("botao3")
let res = document.getElementById("res")


if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    res.innerHTML = "inposivel conta"
    window.alert("tem espaço em branco")
} 
    else {
        res.innerHTML = "caregando"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value) 
        if (p <= 0){
             window.alert("passo invalido não e posivel executa...")
             p = 1
        }
        if (i < f){
            for(let c = i; c <= f; c+=p  ){
             res.innerHTML += ` ${c} \u{1f449}`
               }
           }else{
             for(let c = i ; c>= f ; c-=p ){
                 res.innerHTML += `${c}\u{1f449}`
            }
          }
          res.innerHTML +=`\u{1f3c1}`
        }
}







