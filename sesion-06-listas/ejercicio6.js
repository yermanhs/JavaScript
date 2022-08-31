//Una variable que contenga la lista de la compra (mínimo 5 elementos)
let arrayCompra = ['Papas','Mani','Agua','Gaseosa','Galletas']
arrayCompra.push('Aceite Girasol')
console.log(arrayCompra)
//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
arrayCompra.splice(-1, 1);
console.log(arrayCompra)

const listaPeliculas = [
    { titulo: "Django", director: "Tarantino", fecha:"2013,2,1" },
    { titulo: "Avengers", director: "Joe Russo", fecha:"2019,4,25" },
    { titulo: "Avatar", director: "Cameron", fecha: "2009,12,17"}
]
//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const nuevaLista = listaPeliculas.filter(date => date.fecha > "2010,1,1")
console.log(nuevaLista)

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const arrayDirectores = listaPeliculas.map(function(obj){
    return obj.director
})
console.log(arrayDirectores)

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const arrayTitulos = listaPeliculas.map(function(obj){
    return obj.titulo
})
console.log(arrayTitulos)

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaNueva = arrayDirectores.concat(arrayTitulos)
console.log(listaNueva)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaNueva_1 = [...arrayDirectores, ...arrayTitulos]
console.log(listaNueva_1)





