//Genere un número aleatorio entre 0 y 100 inclusive.
const num = Math.floor(Math.random()*111)
console.log(num)
//Genere un número aleatorio entre 50 y 100 inclusive.
const numero = Math.floor(Math.random()*(100-50+1)+50)
console.log(numero)
//Genere un número aleatorio entre 0 y 255 inclusive.
const numero2 = Math.floor(Math.random()*(255-0+1)+0)
console.log(numero2)
//Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
let cadena = 'JavaScript'
let redondear = Math.floor(Math.random()*11)
console.log(redondear)
console.log(cadena[redondear])
//Use console.log() y caracteres de escape para imprimir el siguiente patrón.
/*1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125*/
console.log("1\t1\t1\t1\t1")
console.log("2\t1\t2\t4\t8")
console.log("3\t1\t3\t9\t27")
console.log("4\t1\t4\t16\t64")
console.log("5\t1\t5\t25\t125")
//Usa substr para separar la frase porque porque porque de la siguiente oración:
//'No puedes terminar una oración con porque porque porque es una conjunción'
let string = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(string.substring(34,55))