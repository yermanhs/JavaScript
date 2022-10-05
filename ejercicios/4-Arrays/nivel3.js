
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//Ordene el array y encuentre la edad mínima y máxima//
console.log(ages.sort())
console.log(Math.max(...ages))
console.log(Math.min(...ages))
//- Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
let suma = 0
let promedio = 0
for(let i=0;i<ages.length;i++){
    suma+=ages[i]
}
promedio = suma/(ages.length)
console.log(promedio)
//- Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
let valor = Math.abs(Math.max(...ages)-promedio)
let valor1 = Math.abs(Math.min(...ages)-promedio)
console.log(valor1===valor)