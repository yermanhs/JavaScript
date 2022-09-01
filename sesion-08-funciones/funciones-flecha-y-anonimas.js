// Funciones tipo flecha - funciones anónimas

const array = [1, 5, 6, 2, 7, 12, 8, 92]

const array1 = array.map(function(valor){
    return valor*2
})
console.log(array1)
//función de tipo flecha
const array2 = array.map((valor) => valor * 2)

console.log(array2)

// const dobleDelValor = valor => {
//     return valor * 2
// }
//definir función tipo flecha y anonima
const dobleDelValor = valor => valor * 2

console.log(doble(6))
console.log(dobleDelValor(6))

const array3 = array.map(dobleDelValor)

console.log(array3)

function doble(valor) {
    return valor * 2
}
