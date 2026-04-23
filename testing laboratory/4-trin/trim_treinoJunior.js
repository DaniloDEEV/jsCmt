let names = ["   Ana   ", "   Carlos", "Maria   ", "   João   "]

let newnames = []

for (let name of names) {
    newnames.push(name.trim())
}

console.log(newnames)