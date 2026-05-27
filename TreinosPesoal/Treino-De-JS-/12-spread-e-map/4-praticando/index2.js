 const players = [
 { nome: "Zuti", xp: 1000, level: 5 },
  { nome: "Ana", xp: 2000, level: 8 },
  { nome: "Carlos", xp: 1500, level: 6 }
];
let newsplayer = players.map(i =>{
   let xpup = i.xp + 1100

   let rank;
   if(xpup >= 2500){
    rank = "bonus xp"
   }else{
    rank = "abaixo do xp"}
    return{
        ...i, 
        xp:xpup,
        rank:rank,
    
    }
})
console.log(newsplayer);
