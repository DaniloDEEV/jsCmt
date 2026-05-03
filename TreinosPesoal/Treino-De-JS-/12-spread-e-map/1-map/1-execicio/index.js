import { players } from "./Banco-de-dados.js";
/*const xpmais = players.map((player)=>{
    return player.xp * 2
   })
   console.log(xpmais)
*/
 const playerxp = players.map((xpe)=>{
    return xpe.xp + 50
})
console.log(playerxp)
   