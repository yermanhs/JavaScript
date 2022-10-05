//Bucle for of
//Usamos el bucle for of para arrays. Es una forma muy práctica de iterar a través de un array, si no estamos interesados en el index de cada elemento del array.

const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    console.log(num);
}


for (const num of numbers) {
  console.log(num * num);
}

// sumando todos los números del array
let sum = 0;
for (const num of numbers) {
    sum = sum + num;
}
console.log(sum); // 15

const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
];

for (const tech of webTechs) {
    console.log(tech.toUpperCase());
}


for (const tech of webTechs) {
  console.log(tech[0]); // obtiene solo la primera letra de cada elemento,  H C J R N M
}

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
const newArr = [];
for (const country of countries) {
    newArr.push(country.toUpperCase());
}
console.log(newArr); // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]