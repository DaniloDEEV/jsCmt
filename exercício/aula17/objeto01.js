let amigo = {nome:"thiago",
    idade:"18",
    peso:85.4,
    engorda(p=0){
        console.log("engordou")
        this.pes  += p
}}
    amigo.engorda(6)
    console.log(`${amigo.nome} pesa ${amigo.peso}kg`)