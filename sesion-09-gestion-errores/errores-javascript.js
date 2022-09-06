const miFuncion = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    //palabra clave throw significa lanzar
    throw new Error("El valor debe ser de tipo número")
}
//console.log(miFuncion("ala"))
// const elDoble = miFuncion("a1a")

//palabras claves try y catch
const numero = "8"

try {
    // Código que puede fallar
    console.log("Está ejecutándose de manera correcta")
    const doble = miFuncion(numero)
    console.log(doble)
} catch (e) {
    // En caso de fallar, quiero que ejecutes
    console.error(`${e}`)
    console.error("ERROR!")
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
}

// InternalError ( problema interno), 
//SyntaxError, (salta cada vez que tiene un fallo de sintaxis)
//TypeError, (salta de interpretación)
//RangeError (error de rango)
//ReferenceError (error que no existe el elemento  o acceder  al que hacemos referencia)
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error