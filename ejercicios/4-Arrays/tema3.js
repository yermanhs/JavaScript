//Push: agrega elementos al final. Para agregar un elemento al final de un array existente, usamos el método push.
const arr = ["item1", "item2", "item3"]
arr.push("new item")
console.log(arr)

const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers) // -> [1,2,3,4,5,6]

numbers.pop() // -> eliminar un elemento del final
console.log(numbers) // -> [1,2,3,4,5]
numbers.shift(); // -> elimina un elemento del principio
console.log(numbers); // -> [2,3,4,5]


let fruits = ["banana", "orange", "mango", "lemon"]
fruits.push("apple")
console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple']

//unshift: Agrega un elemento al inicio del array
const numbers2 = [1, 2, 3, 4, 5]
numbers2.unshift(0) // -> Añadir un elemento al inicio
console.log(numbers2) // -> [0,1,2,3,4,5]

//reverse: invertir el orden de un array.
const numbers3 = [1, 2, 3, 4, 5]
numbers3.reverse() // -> reverse array order
console.log(numbers3) // [5, 4, 3, 2, 1]

numbers3.reverse()
console.log(numbers3)// [1, 2, 3, 4, 5]

//sort: Ordena los elementos de un array en orden ascendente. Sort toma una función call back
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
]
webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse() // after sorting we can reverse it
console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

//array de arrays
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"]
const backEnd = ["Node", "Express", "MongoDB"]
const fullStack = [frontEnd, backEnd]
console.log(fullStack) // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length)// 2
console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]