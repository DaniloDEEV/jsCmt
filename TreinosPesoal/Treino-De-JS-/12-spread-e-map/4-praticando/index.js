/*
💻 Exercício (map + spread)

Você tem esse array:

const players = [
  { nome: "Zuti", xp: 1000, level: 5 },
  { nome: "Ana", xp: 2000, level: 8 },
  { nome: "Carlos", xp: 1500, level: 6 }
];
-------------------------------------------------
🎯 Desafio:

Crie um novo array chamado upPlayers onde:
NÃO pode alterar o array original
Todos os jogadores ganham +500 de XP
Adicione uma nova propriedade:
rank: "Pro" se o xp for maior ou igual a 2000
senão rank: "Noob"
-------------------------------------------------
⚠️ Regras:
usar map
usar spread+
usar if ou operador ternário
*/


/*  minhas anotação
    todos os players ganha 500 de xp
    adicionar no array o rank pro if >= a 2000
    < que 200 é noob
*/
const players = [
  { nome: "Zuti", xp: 1000, level: 5 },
  { nome: "Ana", xp: 2000, level: 8 },
  { nome: "Carlos", xp: 1500, level: 6 }
];

const upPlayers = players.map(i => {
    const novoXp = i.xp + 500

    return {
        ...i,
        xp: novoXp,
        rank: novoXp >= 2000 ? "Pro" :  "Noob"
    }
})

console.log(upPlayers)