function maiorNumero(n1, n2) {
  return n1 > n2 ? n1 : n2
}

const veri = document.getElementById("veri")
const res = document.getElementById("res")

veri.addEventListener("click", function () {

  const btn1 = document.getElementById("btn1").value
  const btn2 = document.getElementById("btn2").value

  if (btn1 === "" || btn2 === "") {

    res.textContent = "Digite os dois números"
    return

  }

  const n1 = Number(btn1)
  const n2 = Number(btn2)
  

  const resultado = maiorNumero(n1, n2)
  res.textContent = "O maior número é: " + resultado

})
