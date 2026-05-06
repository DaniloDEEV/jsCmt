const players = [
  { nome: "Zuti", xp: 1000, level: 5 },
  { nome: "Ana", xp: 2000, level: 8 },
  { nome: "Carlos", xp: 1500, level: 6 }
];
 const news = players.map(i=>{
    const novolevel = i.level + 2;

   let rank;
   if(novolevel >= 8){
     rank = "pro"
   }else{
    rank = "noob"
   };

    return{
        ...i,
        level:novolevel,
        rank:rank,
    };
 })
   console.log(news);
   //rank : novolevel >= 8 ? "pro":"noob"