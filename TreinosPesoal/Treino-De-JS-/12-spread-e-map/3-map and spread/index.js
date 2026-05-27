let users = [
    {nome:"diego",idade:32},
    {nome:"felipw",idade:21},
    {nome:"gustavo",idade:24}
]
let newusers = users.map(i=>{
    return{
    ... i ,
    idade:i.idade + 1
    }
    
})
console.log(newusers)
