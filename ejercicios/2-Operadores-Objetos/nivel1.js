//Declare las siguientes variables; firstName, lastName, country, city, age, isMarried, year y asignar un valor, 
//use el operador typeof para verificar diferentes tipos de datos.
let firstName= "Yerman"
let lastName = "Saenz"
let country = "Colombia"
let city = "Ibague"
let age = 46
isMarried = true
let year = 2012

//Verifique si typeof '10' es igual a 10
console.log(typeof 10 == '10')

//Verifique si parseInt('9.8') es igual a 10
console.log(parseInt('9.8') == 10)
//Verifique cualquier valor booleano true o false.
console.log("milk".length != "meat".length)
//Escriba tres declaraciones de JavaScript que proporcionen un valor verdadero.
let check = 10 > 3
const checker = 4 > 3 || 10 > 5
//Escriba tres declaraciones de JavaScript que proporcionen un valor falso.
let check1 = 10 <= 3
const checker1 = 4 < 3 || 10 < 5
//Calcule primero el resultado de la siguiente expresión de comparación sin usar console.log(). Después de decidir el 
//resultado, confirmelo usando console.log()
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

//Utilice el objeto Date para realizar las siguientes actividades
//¿Qué año es hoy?
const now = new Date();
console.log(now.getFullYear())
//¿Qué mes es hoy con un número?
console.log(now.getMonth())
//¿Qué fecha es hoy?
console.log(now)
//¿Qué día es hoy con un número?
console.log(now.getDay())
//¿Cuál es la hora actual?
console.log(now.getHours())
//¿Cuántos minutos hay actualmente?
console.log(now.getMinutes())
//Averigüe el número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora.
console.log(now.getTime())
