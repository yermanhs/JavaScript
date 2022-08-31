// .sort() -> MODIFICA EL ARRAY
const array = [2, 5, 9, 15, 1, 2, 0, 4]

console.log(array)

array.sort((a,b)=>{
    return -1 //invierte  el orden del array
})
console.log(array)

array.sort((a, b) => {
    if (a < b) {
        return -1 // +1 o cualquier valor positivo si quiere de mayor a menor
    } else if (a > b) {
        return +1 //-1 o cualquier valor negativo si quiere de mayor a menor
    } else { // a === b
        return 0
    }
})
//ordena el array de menor a mayor
console.log(array)

// Ordenar únicamente arrays numéricos
const arrayNumerico = [4, 1, 7, 3, 1, 3, 56, 1, 546]

arrayNumerico.sort((a, b) => a - b) // o b - a si es mayor a menor el orden

console.log(arrayNumerico)

// Interesante en arrays de objetos
const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}
]
// listaObjetos.sort((a, b) => {
//     if (a.edad < b.edad) {
//         return -1
//     } else if (a.edad > b.edad) {
//         return +1
//     } else {
//         return 0
//     }
// })
listaObjetos.sort((a, b) => a.edad - b.edad)

console.log(listaObjetos)