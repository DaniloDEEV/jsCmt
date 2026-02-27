  let addBtn = document.getElementById("addBtn")
  addBtn.addEventListener("click", () => {
  let pesq = document.getElementById("taskInput").value


  if(pesq.trim().length === 0){
    alert("digite sua tarefa")
  }else{
    alert("segue")
  }
})