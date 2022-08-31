//La fecha de hoy
const fecha = new Date()
console.log(fecha)

//- La fecha de tu nacimiento
const fecha1 = new Date("May 12, 1975")
console.log(fecha1)

//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const fecha2 = console.log(fecha > fecha1)

//- Una variable que contenga el día de tu nacimiento
const dia = console.log(fecha1.getDate())

//- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mes = console.log(fecha1.getMonth())

//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)*/
const anyo = console.log(fecha1.getFullYear())