/*Primero elimine todos los signos de puntuación y cambie de string a array y cuente el número de palabras en el array*/
let text ="I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
const words=text.split(" ")
console.log(words)
console.log(words.length)

//Concatene las siguientes dos variables y guardelas en una variable fullStack.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"]
const backEnd = ["Node", "Express", "MongoDB"]
const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

