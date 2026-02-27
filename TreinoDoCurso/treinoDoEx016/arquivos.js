function clicar(){
    let nn1 = document.getElementById("nn1")
    let nn2 = document.getElementById("nn2")
    let res = document.getElementById("res")
    let r = ""
    
    if(nn1.value.length == 0 || nn2.value.length == 0){
        window.alert("ERRO Prencha todos os campos")
    }else{
        var i = Number(nn1.value)
        var f = Number(nn2.value)
    }if (i < f ){
        for( let c = i; c <= f; c++ ){
            
           r += c + " "

            
        }
    } res.innerHTML = `${r}`








 }