function cliquei() {
    var campo = document.getElementById("inp").value
    var check = document.getElementById("res")

    if (campo.length == 0) {
        check.innerHTML = "Idade inválida"
        return
    }

    var inp = Number(campo)

    if (inp < 0) {
        check.innerHTML = "Idade inválida"
    } else if (inp <= 12) {
        check.innerHTML = `Usuário de ${inp} anos é criança, acesso NEGADO`
    } else if (inp <= 18) {
        check.innerHTML = `O usuário tem ${inp} anos, é adolescente, acesso LIBERADO`
    } else if (inp <= 59) {
        check.innerHTML = `O usuário tem ${inp} anos, é adulto, acesso LIBERADO`
    } else {
        check.innerHTML = `O usuário tem ${inp} anos, é idoso, acesso LIBERADO`
    }
}
