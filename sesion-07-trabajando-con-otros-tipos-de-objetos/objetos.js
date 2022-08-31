// Trabajando con Objetos, definimos un objeto
const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "González",
    isDeveloper: false,
    libros_favoritos: ["El método", "El código de la manifestación"],
    "4-juegos": [1, 2, 3, 4]//el nombre de la clave puede estar entre comillas
}
//acceder a los valores del objeto
console.log(obj.id)
console.log(obj["4-juegos"])
//como llamar a propiedades a partir de variables declaradas con anterioridad
const prop = "isDeveloper"
console.log(obj[prop])
//replicar el objeto
const obj2 = obj;
console.log(obj2);
// a la hora de igual un objeto a otro, nos copia los valores en ambos
obj2.nombre = "Iñigo"
console.log(obj2.nombre)
console.log(obj.nombre)
//si se igualan valores elementos primitivos no copia o duplica
let val1 = 4
let val2 = val1

val2 = 6
console.log(val1)
console.log(val2)

//////////////
//para que no duplique se puede igualar de esta forma con propagación
const obj3 = { ...obj }

console.log(obj.nombre)
console.log(obj3.nombre)
//si se cambia el valor del obj3 no cambia el valor del obj original
obj3.nombre = "Gorka"

console.log(obj.nombre)
console.log(obj3.nombre)

/////////////
// Cómo ordenar listas de objetos en función de una propiedad
//crear una lista de objetos
const listaPeliculas = [
    { titulo: "Lo que el viento se llevó", anyo: 1939 },
    { titulo: "Titanic", anyo: 1997 },
    { titulo: "Moana", anyo: 2016 },
    { titulo: "El efecto mariposa", anyo: 2004 },
    { titulo: "TED", anyo: 2012 }
]

console.log(listaPeliculas)
// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a, b) => a.anyo - b.anyo)

console.log(listaPeliculas)

