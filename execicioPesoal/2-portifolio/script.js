const btn = document.getElementById("btnVerMais");
const projetos = document.getElementById("projetos");

btn.addEventListener("click", () => {
  projetos.classList.toggle("escondido");

  // muda o texto do botão
  if (projetos.classList.contains("escondido")) {
    btn.textContent = "Ver mais";
  } else {
    btn.textContent = "Ver menos";
    projetos.scrollIntoView({ behavior: "smooth" });
  }
});