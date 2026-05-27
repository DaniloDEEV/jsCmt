const users = [
  { id: 1, name: "Carlos", age: 18, money: 150.50 },
  { id: 2, name: "Ana", age: 22, money: 320.00 },
  { id: 3, name: "Joao", age: 19, money: 89.90 },
  { id: 4, name: "Marina", age: 25, money: 540.75 },
  { id: 5, name: "Lucas", age: 17, money: 45.00 },
  { id: 6, name: "Fernanda", age: 28, money: 999.99 },
  { id: 7, name: "Pedro", age: 21, money: 120.30 },
  { id: 8, name: "Julia", age: 20, money: 410.00 },
  { id: 9, name: "Ricardo", age: 30, money: 75.80 },
  { id: 10, name: "Beatriz", age: 24, money: 660.40 },
  { id: 11, name: "Mateus", age: 26, money: 250.00 },
  { id: 12, name: "Larissa", age: 23, money: 180.60 }
]
const maxvalue = users.reduce((acc,user)=>{
  return acc + user.money
} , 0)
const valuefixed = maxvalue.toFixed(2)

