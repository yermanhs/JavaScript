/*Métodos para manipular arrays
Existen diferentes métodos para manipular un array. Estos son algunos de los métodos disponibles 
para manejar arrays:Array, length, concat, indexOf, slice, splice, join, toString, includes, 
lastIndexOf, isArray, fill, push, pop, shift, unshift*/

//Array//
const arr = Array()// crea un array vacío
console.log(arr)

const eightEmptyValues = Array(8) // crea ocho valores vacíos
console.log(eightEmptyValues)// [empty x 8]

//fill//
const arr1 = Array()// crea un array vacío
console.log(arr1)

const eightXvalues = Array(8).fill("X") // crea ocho valores de elementos llenos de 'X'
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // crea ocho valores de elementos llenos de '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // crea 4 valores de elementos llenos de '4'
console.log(four4values) // [4, 4, 4, 4]

//concat//
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)// [1, 2, 3, 4, 5, 6]

//Longitud del Array//
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length) // -> 5 es el tamaño del array

//index del Array//
console.log(numbers.indexOf(5)) // -> 4
console.log(numbers.indexOf(0)) // -> devuelve -1 si no existe
console.log(numbers.indexOf(1)) // -> 0
//comprobando que exista//
let index = numbers.indexOf(1)
if (index===-1){
    console.log("Este numero no existe en el array")
}else{
    console.log("Este numero existe en el array")
}
//ternay//
index === -1
? console.log("Este numero no existe en el array")
: console.log("Este numero existe en el array")

//lastIndex - ultimo elemento en el array//
const numbersx = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(numbersx.lastIndexOf(2)) // 7
console.log(numbersx.lastIndexOf(0)) // -1
console.log(numbersx.lastIndexOf(1)) //  6

//Includes para verificar si un elemento existe en un array//
const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ] // Lista de tecnologías web
console.log(webTechs.includes("Node")) // true
console.log(webTechs.includes("C#")) // false

//Array.isArray:Para verificar si el tipo de dato en un array//
const numbers5 = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers5)) // true

//toString:Convierte un array a string//
const numbers6 = [1, 2, 3, 4, 5];
console.log(numbers6.toString()); // 1,2,3,4,5

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

//join. se usa para unir elemmentos del array//
console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
console.log(names.join("")) //AsabenehMathiasEliasBrook
console.log(names.join(" ")) //Asabeneh Mathias Elias Brook
console.log(names.join(", ")) //Asabeneh, Mathias, Elias, Brook
console.log(names.join(" # ")) //Asabeneh # Mathias # Elias # Brook

//Slice. cortar elementos de un array
const numbers7 = [1, 2, 3, 4, 5]
console.log(numbers7.slice()) // -> copia todos los elementos
console.log(numbers7.slice(0))// -> copia todos los elementos
console.log(numbers7.slice(0, numbers7.length)) // copia todos los elementos
console.log(numbers7.slice(1, 4)) // -> [2,3,4] // no incluye la posición final

//Splice: Toma tres parámetros: posición inicial, número de elementos a eliminar y cantidad de elementos que se agregarán.
const numbers8 = [1, 2, 3, 4, 5]
numbers8.splice()
console.log(numbers8) // -> elimina todos los elementos
const numbers9 = [1, 2, 3, 4, 5]
numbers9.splice(0, 1)
console.log(numbers9) // elimina el primer elemento
const numbers10 = [1, 2, 3, 4, 5, 6]
numbers10.splice(3, 3, 7, 8, 9)
console.log(numbers10.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //elimina tres elementos y reemplaza tres elementos


