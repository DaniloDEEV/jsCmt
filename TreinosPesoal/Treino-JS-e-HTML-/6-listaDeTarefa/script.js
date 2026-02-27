
function addt(){
let input = document.getElementById("input").value
let li = document.createElement("li")
li.innerHTML = input + '<span>❌</span>'

let span = li.querySelector("span")
span.addEventListener("click", function(){
   delet(span)
})

document.querySelector("ul").appendChild(li)
document.getElementById("input").value = ""
}


function delet(li){  
   li.parentElement.remove()
} 


/*

function addt(){
let input = document.getElementById("input").value
let li = document.createElement("li")
li.innerHTML = input + '<span onclick="delet(this)">❌</span>'



document.querySelector("ul").appendChild(li)
document.getElementById("input").value = ""
}


function delet(li){
   let btn = document.getElementById("btn")
   
   li.parentElement.remove()


} 
*/