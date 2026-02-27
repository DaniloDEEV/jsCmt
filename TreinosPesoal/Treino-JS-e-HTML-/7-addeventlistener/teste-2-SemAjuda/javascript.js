const email = document.getElementById("gmail");
const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const add = document.getElementById("add");
const main = document.querySelector("main");

let res; // ainda NÃO existe

add.addEventListener("click", function () {

    // cria o container só uma vez
    if (!res) {
        res = document.createElement("div");
        res.id = "res";
        main.appendChild(res);
    }

    const p = document.createElement("p");
    p.innerHTML = `
        Email: ${email.value}<br>
        Usuário: ${nome.value}<br>
        Idade: ${idade.value}
    `;

    res.appendChild(p);
});
