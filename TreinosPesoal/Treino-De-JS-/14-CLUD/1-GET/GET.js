const id = 1
const url = "https://dummyjson.com/products"
const urlid = `https://dummyjson.com/products/${id}`
async function chama (){

 /*forma mais tradicional */
 //     const response = await fetch(url)
 //     const dados = await response.json()  
 //      console.log(dados)
 // const obj = await (await fetch(url)).json()

//---------------------------------------------

  const resp = await fetch(urlid)
  const dados = await resp.json()
//   com id
//   const dadoSId = await (await fetch(urlid)).json()
     console.log(dados)
      
}
chama()