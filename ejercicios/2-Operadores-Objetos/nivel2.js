//Escriba un script que solicite al usuario que ingrese la base y la altura del triángulo y calcule 
//el área de un triángulo (área = 0,5 x b x h).
/*let base = prompt("Ingrese la base del triangulo")
let altura = prompt("Ingrese la altura del triangulo")
let area= 0.5 * parseInt(base) * parseInt(altura)
alert("el area del triangulo es: "+ area)

/*Ingrese base: 20
Ingrese altura: 10
El área del triángulo es: 100*/

/*Escriba un script que solicite al usuario que ingrese el lado a, el lado b y el lado c del triángulo y 
calcule el perímetro del triángulo (perímetro = a + b + c)*/
/*let lado_a = prompt("Ingrese el lado_a del triangulo")
let lado_b = prompt("Ingrese el lado_b del triangulo")
let lado_c = prompt("Ingrese el lado_c del triangulo")
const perimetro= parseInt(lado_a) + parseInt(lado_b) + parseInt(lado_c)
alert("el perimetro del triangulo es: "+ perimetro)
/*Ingrese lado a: 5
Ingrese lado b: 4
Ingrese lado c: 3
El perimetro del triangulo es: 12*/

//Obtenga el largo y el ancho usando prompt y calcule el área del rectángulo (área = largo x ancho y 
//el perímetro del rectángulo (perímetro = 2 x (largo + ancho))

//Obtenga el radio usando prompt y calcule el área de un círculo (área = pi x r x r) y la circunferencia 
//de un círculo (c = 2 x pi x r) donde pi = 3.14.

//Calcule la pendiente, la intersección X y la intersección Y de y = 2x -2

//La pendiente es m = (y2-y1)/(x2-x1). Encuentra la pendiente entre el punto (2, 2) y el punto (6,10)

//Compare la pendiente de las dos preguntas anteriores.

//Calcula el valor de y (y = x2 + 6x + 9). Trate de usar diferentes valores de x y averigüe en qué valor de x y es 0.

//Escriba un script con prompt que solicite al usuario que ingrese las horas y la tarifa por hora. 
//¿Calcular el salario de la persona?

/*Ingrese horas: 40
Introduce la tarifa por hora: 28
Su ganancia semanal es 1120

Si la longitud de su nombre es mayor que 7, diga que su nombre es largo; de lo contrario, 
diga que su nombre es corto.*/
let nombre = 'Yerman'
if(nombre.length > 7){
    console.log('su nombre es largo')
}else{
    console.log('su nombre es corto')
}
//Compare la longitud de su nombre y la longitud de su apellido y debería obtener este resultado.
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
if(firstName.length > lastName.length ){
    console.log(`Tu primer nombre, ${firstName}, es más largo que tu apellido, Yetayeh`)
}else{
    console.log('su nombre es corto')
}
/*let firstName = "Asabeneh";
let lastName = "Yetayeh";
Tu primer nombre, Asabeneh, es más largo que tu apellido, Yetayeh.*/

//Declare dos variables myAge y yourAge y asignarles los valores iniciales y myAge y yourAge.

/*let myAge = 250;
let yourAge = 25;
Soy 225 años mayor que tú.*/

//Usando prompt, obtenga el año en que nació el usuario y, si el usuario tiene 18 años o más, permita que 
//el usuario conduzca, si no dígale que espere una cierta cantidad de años.

/*Introduzca el año de nacimiento: 1995
Tienes 25 años. Tienes la edad suficiente para conducir.

Introduzca el año de nacimiento: 2005
Tienes 15 años. Podrás conducir después de 3 años.*/

//Escriba un script que solicite por prompt al usuario que ingrese el número de años. Calcular el número de segundos que puede vivir una persona. Supongamos que alguien vive solo cien años

/*Ingrese el número de años de vida: 100
 Viviste 3153600000 segundos.*/

// Cree un formato de hora legible por humanos usando el objeto Date.

/*YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm*/

/*Ejercicios de arrays*/
const comidas = ['Desayunar', 'Almorzar', 'Comer', 'Merendar', 'Cenar']
comidas.forEach(function(comida, index) {
    if (comida === "Desayunar"){
        console.log(`${index} : ${comida}`)
    }
})

let testResults = [ true, true, true, true, true, false, false, false, false, false, false, false ]
let resultado = null
testResults.forEach(function(valor,index){
    if (valor===false){
        resultado = `${index}`
    }
})
console.log(resultado)

let resultado1 = null
resultado1 = testResults.indexOf(false)
console.log(resultado1)

/*Reto Semanal #2
Para el reto de hoy vamos a manejar dos Arrays separados.
La meta es encontrar la multiplicación más grande entre dos elemento de el Array.
Los Array no están ordenado.
Mira este ejemplo:
let a1 = [ 10, 12, 1, 9, 2]
a2 = [ 2, 2, 4, 2, 3 ]
En este caso la respuesta que buscamos es 48. La multiplicación entre al 12 del Array a1 y del 4 del Array a2 
nos da el resultado más grande.*/

let b1 = [ 10, 12, 1, 9, 2]
let b2 = [ 2, 2, 4, 2, 3 ]
let resultado3 = 0
let m_b1 = Math.max(...b1)
let m_b2 = Math.max(...b2)
resultado3 = m_b1 * m_b2
console.log(resultado3)

let a1 = [ 3, 1, 2, 8, 13, 9, 1, 1, 2, 3, 4, 10, 12, 11, 1, 1]
let a2 = [ 5, 7, 7, 7, 7, 2, 1, 2, 0]

let resultado2 = 0
let m_a1 = Math.max(...a1)
let m_a2 = Math.max(...a2)
resultado2 = m_a1 * m_a2
console.log(resultado2)

