
function carregar(){
var smg = document.getElementById("smg")
var imagen = document.getElementById("imagen")
var data = new Date()
var hora = data.getHours()



smg.innerHTML = `agora são ${hora} horas`

if (hora >= 5 && hora < 12){
   imagen.src = "manha.png" //bom dia
   document.body.style.background = "#e2cd9f"
}
else if (hora >= 12 && hora < 18){
   imagen.src = "terde.png" //boa tarde
   document.body.style.background = "#b9846f"
}else{
   imagen.src = "noite.png" //boa noite
   document.body.style.background = "#515154"
}


}
