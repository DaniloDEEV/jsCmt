let num = [5, 8, 1, 9, 3]
//num[2]=6 
//num.push(10)   
num.push(6)
num.sort()
/*
console.log(`O vetor tem ${num.length} elementos}`)
console.log(num[1])
console.log(num)
*/
let pos = num.indexOf(6)
if(pos == -1){
    console.log("nao esiste")
}else{
    console.log(`a posiçao é ${pos}`)
}

