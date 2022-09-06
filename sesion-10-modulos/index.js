// Formas de importar/exportar módulos
// 1. CommonJS - require
// 2. Import ES6 - import

// const moduloMatematicas = require("./modulos/matematicas.js")
/*const sum = moduloMatematicas.suma(12, 90)
console.log(sum)*/

// const factorial = moduloMatematicas.factorial;
/*const fact = factorial(5)
console.log(fact)
*/

// const { factorial, suma } = moduloMatematicas;
// const suma = moduloMatematicas.suma;
// console.log(moduloMatematicas.suma)

const { factorial, suma } = require("./modulos/matematicas.js")

const fact = factorial(5)
console.log(fact)

const sum = suma(12, 90)
console.log(sum)

// console.log(module)

//correrlo en terminal node index.js