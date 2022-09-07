const persona = {
    nombre: "Gorka",
    edad: 34,
    isDeveloper: true,
    saludo: function() { //variables como funciones
        console.log('Hola')
    }
}

// console.log(persona)
persona.saludo()

const otra_persona = {
    nombre: "Yerman",
    edad: 46,
    isDeveloper: false,
    saludo: function() {
        console.log('Hola')
    }
}

otra_persona.saludo()

//si estamos repitiendo el saludo, crear una función crear persona tipo flecha

// Función factory
const creaPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // nombre: nombre
        edad,
        isDeveloper,
        saludo: function() {
            console.log('Hello')
        }
    }
}

const nueva_persona = creaPersona("Juan", 23, true)
console.log(nueva_persona)

const nueva_persona_2 = creaPersona("Maria", 44, false)
console.log(nueva_persona_2)