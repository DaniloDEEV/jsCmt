

    
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
   
    if (fano.value.length  == 0 || Number(fano.value) > ano){
        alert("Por favor, verifique se não está faltando nada")
      }  else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""

        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        if (fsex [0].checked ){
         genero = "homen"
         img.style.width = "420px";  
         img.style.height = "300px"; 
        if(idade >= 0 && idade <= 10){
          //criaça
          img.setAttribute('src','menino_crianca.png')
          
          }
           else if (idade < 21){
            img.setAttribute('src','adolescente_menino.png')
           //jovem
            }            
            else if(idade < 50){      
              img.setAttribute('src','homem_adulto.png')      
            //adulto
             }
              else {
                img.setAttribute("src" , "NaN")
              //idoso
               }}
          else if(fsex [1].checked)
            
          { genero = "mulher"
            img.style.width = "420px";  
            img.style.height = "300px"; 
            if(idade >= 0 && idade <= 10){
              img.setAttribute("src" , "menina_morena.png")
            //criaça
            }
             else if (idade < 21){
              img.setAttribute("src","menina_loira.png")
             //jovem    
             }            
              else if(idade < 50){ 
                img.setAttribute("src" , "mulher_adulta.png")           
              //adulto
              }
                else {
                //idoso
                 }}
          
          res.style.textAling = "center"
          res.innerHTML = `foi detectado que voce tem ${idade} ano e o genero e ${genero}`
          res.appendChild(img)
       }
       
            
        } 