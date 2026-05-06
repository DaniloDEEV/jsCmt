let users = [
    {nome:"diogo",idade:18},
    {nome:"raphael",idade:13},
    {nome:"herisvaldo",idade:28}
]
  let newusers = users.map(i =>{
    return{
    ... i ,
        idade:i.idade *2
    }
  })


