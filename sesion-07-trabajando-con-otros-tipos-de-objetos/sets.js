// Sets o conjuntos (en castellano)
const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", { id: 5 }, "hola"]

const miSet = new Set(array)

console.log(array)
//nunca nos permite almacenar valores que ya existen, no habra valores duplicados
console.log(miSet)

// .add()
miSet.add(9)
console.log(miSet)
miSet.add(4)
console.log(miSet)

// .delete()
miSet.delete("hola")
console.log(miSet)

// .clear()
// miSet.clear()
// console.log(miSet)

// .has() similar al elemento includes busca un elemento dentro del conjunto
// console.log(array.includes(2))
console.log(miSet.has(40))

// .size el tamaño del set
console.log(miSet.size)

//interacción dentro de los valores
miSet.forEach(valor => {
    console.log(valor)
})

const it_miSet = miSet.values()
console.log(it_miSet)
//con el factor de propagación convertir el set en un array con valores unicos
const ar_miSet = [ ...miSet ]
console.log(ar_miSet)
console.log(ar_miSet[2])