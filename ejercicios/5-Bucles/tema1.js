for (let i = 0; i <= 5; i++) {
    console.log(i);
}

for (let i = 5; i >= 0; i--) {
    console.log(i);
}

for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`);
}

const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"]
const newArr = []
for (let i = 0; i < countries.length; i++) {
//Push: Para agregar un elemento al final de un array existente, usamos el método push.
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

//Agregar todos los elementos en un array
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    //console.log(`${sum} + ${numbers[i]}`)
    sum = sum + numbers[i]// sum += number
}
console.log(sum)

//Crea un nuevo array basado en el array existente
const numbers1 = [1, 2, 3, 4, 5]
const newArr1 = []
for (let i = 0; i < numbers1.length; i++) {
  newArr1.push(numbers1[i] ** 2)
}
console.log(newArr1)




