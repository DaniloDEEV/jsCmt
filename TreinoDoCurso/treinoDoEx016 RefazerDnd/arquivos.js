function clicar(){
let n1 = document.getElementById("nn1");
let n2 = document.getElementById("nn2");
let res = document.getElementById("res")

let i = Number(nn1.value)
let f = Number(nn2.value)
let r = ""
if(i < f){
    
    for(let c = i; c <= f ; c++ ){
    r += c +" "
    }
}res.innerHTML = `${r}`


 }






