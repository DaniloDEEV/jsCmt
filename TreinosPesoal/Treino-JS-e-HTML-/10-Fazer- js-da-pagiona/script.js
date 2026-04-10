    let btn = document.getElementById("btn")

    btn.addEventListener("click", ()=>{
    let name = document.getElementById  ("nome") 
    let plate = document.getElementById("placa")
    let transporter = document.getElementById("transportadora")
    let list = document.getElementById("lista")

    if(name.value.trim() === "" || plate.value === 0 ||
      transporter.value.trim() === 0){
        let inputs = document.querySelectorAll(".inputs")
        inputs.forEach((valor)=>{
         if(valor.value.trim() === ""){
         valor.style.backgroundColor = "red"
         }else{
         valor.style.backgroundColor = "green"
          }
           })}else{
            let li = document.createElement("li")
            li.textContent = `Nome: ${name.value} | Placa: ${plate.value} | Transportador: ${transporter.value}`
            list.appendChild(li)
                     }
                      })