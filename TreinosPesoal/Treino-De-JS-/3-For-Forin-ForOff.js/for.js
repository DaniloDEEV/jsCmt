/*let users = ["denis","rodrigo","daniel"]
for(let i = 0; i < users.length ; i++){
    console.log(users[i])
} 
*/
let users = { danilo: "12 anos", pablo: "18 anos" }
let keys = Object.keys(users)
for(let i=0;i<keys.length;i++){
    let key = keys[i]
    console.log(key + ": " + users[key])


}

