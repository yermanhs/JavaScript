//Como crear un aaya vacio//
//Usando el constructor de arrays//
const arr = Array()
console.log(arr)

let arr1 = new Array()
console.log(arr1)

//Usando Corchetes cuadrados//
const arr2 =[]
console.log(arr2)

//Array con valores//
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]// array de  números
const fruits1 = ["banana", "orange", "mango", "lemon"]// array de strings, Fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]// array de strings, vegetables
const animalProducts = ["milk", "meat", "butter", "yoghurt"]// array de strings, products
const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"]// array web, technology
const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"] // array de strings, country

// Imprimimos el array y su longitud

console.log("Numbers:", numbers)
console.log("Number of numbers:", numbers.length)

console.log("Fruits:", fruits1)
console.log("Number of fruits:", fruits1.length)

console.log("Vegetables:", vegetables)
console.log("Number of vegetables:", vegetables.length)

console.log("Animal products:", animalProducts)
console.log("Number of animal products:", animalProducts.length)

console.log("Web technologies:", webTechs)
console.log("Number of web technologies:", webTechs.length)

console.log("Countries:", countries)
console.log("Number of countries:", countries.length)

//Array con diferentes campos//
const arr3 = [
    "Asabeneh",
    250,
    true,
    { country: "Finland", city: "Helsinki" },
    { skills: ["HTML", "CSS", "JS", "React", "Python"] },
  ] // arr contiene diferentes tipos de datos
console.log(arr3)

//Creando un Array usando split//
let js = "JavaScript"
const charsInJavaScript = js.split("")
console.log(charsInJavaScript)

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
const companies = companiesString.split(",")
console.log(companies)

let txt ="I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
const words = txt.split(" ")
console.log(words)

//accediento a los elementos del Array//
const fruits = ["banana", "orange", "mango", "lemon"]
let firstFruit = fruits[0] // estamos accediendo al primer elemento usando su index
console.log(firstFruit) // banana

secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon

// El último index se puede calcular de la siguiente manera
let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]
console.log(lastFruit) // lemon

//Modificar elementos de array//
const numbers1 = [1, 2, 3, 4, 5]
numbers1[0] = 10 // cambiando 1 en el índice 0 a 10
numbers1[1] = 20 // cambiando 2 en el índice 1 a 20
console.log(numbers1) // [10, 20, 3, 4, 5]

const countries1 = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
]
countries1[0] = "Afghanistan"; // Sustitución de Albania por Afganistán
let lastIndex1 = countries1.length - 1;
countries1[lastIndex1] = "Korea"; // Sustitución de Kenia por Corea
console.log(countries1);