function tabuada(){
   var n = document.getElementById("txtn");
   var tab = document.getElementById("seltab")
if(n.value.length == 0){
     alert("por favor digite um numero")
}else{
    tab.innerHTML = ''
    var num = Number(n.value)
    for(var c = 1; c <= 10 ; c++){
    var item = document.createElement("option")
    item.text = ` ${num} x ${c} = ${num*c} ` 
    tab.appendChild(item)
 

   }
    
}    
}