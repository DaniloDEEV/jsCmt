let num = window.document.getElementById("num")
let res = window.document.getElementById("res")
function calcular(){
    let n = Number(num.value)
    if(num.value.length === 0){
        res.innerText = "digite um valor"
    }else if(n < 0){
       res.innerHTML = ("erro")
    }else{
        let fat = 1
        for(let i = n ;i > 1; i-- ) {
            fat *= i
        }
        res.innerHTML = `a fatorial de ${n} é ${fat}`
    }
}