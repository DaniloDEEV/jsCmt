//teste fazendo sozinho
import { player } from "./banco-de-dados.js";

const moreXp = player.map((jogador)=>{
  return{
    ...jogador,
    xp:jogador.xp*2
  }  /*deixa os jogadores com 2 vezes o xp*/

})

/*moreXp.forEach(i =>{
  console.log(`Nome:${i.nome}  Gmail:${i.email}  Senha:${i.senha}`)
})//show email name and pasword*/

moreXp.forEach(i =>{
  console.log(`Nome:${i.nome} Tem ${i.xp} XP`)
})

//console.log(moreXp)//xp 2x

////////////////////////////////////////////////  