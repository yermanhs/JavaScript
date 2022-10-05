//Desarrolla un pequeño script que genera un id con cualquier número de caracteres aleatorios
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
let result= ' '
const charactersLength = characters.length
for ( let i = 0; i <=5; i++ ) {
    result += characters.charAt(Math.random() * charactersLength)
}
console.log(result)

//Cree un array con la logitud de cada pais
let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let newArray = []
let treeletters = []
for (const countrieslength of countries) {
    newArray.push(countrieslength.length)

    //Push: agrega elementos al final.
}
console.log(newArray)
console.log(treeletters)

//crear la siguiente array de arrays
