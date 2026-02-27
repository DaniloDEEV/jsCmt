var txt =  document.getElementById("b1p")
var idade = document.getElementById("idade")
var res = document.getElementById("res")

var data = new Date()
var ano = data.getFullYear()
var mes = data.getMonth()

function clicar(){
if (idade.value.length == 0 ){
res.innerHTML = "data invalida"
} 
else
res.innerHTML = `Voce tem ${idade.value} anos`








}