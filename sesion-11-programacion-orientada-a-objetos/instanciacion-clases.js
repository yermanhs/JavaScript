//declarar un objeto de clase "persona"
class Persona {
    constructor(nombre, edad, isDeveloper) { //metodo constructor por defecto
        this.nombre = nombre //esta es la forma de declarar las variables
        this.edad = edad //this hacer referencia a la variable
        this.isDeveloper = isDeveloper
    }
    saludo() { // esto es un metodo
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`)
    }
}

const nueva_persona = new Persona("Gorka", 34, true) // palabra reservadad new , permite crear un ojeto de la clase "persona"
console.log(nueva_persona)
console.log(nueva_persona.nombre)
nueva_persona.saludo()

let numero = 60 // inicializar
console.log(typeof numero)

let persona_2 = new Persona("Johanna", 38, false) // instanciar
console.log(persona_2)
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona)

// instanceof -> similar a typeof pero para clases