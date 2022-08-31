const obj = {
    nombre: 'Yerman',
    apellido: "Saenz",
    edad: 47,
    altura: 177,
    eresDesarrollador:true
}
const edad = "edad"
console.log(obj[edad])
//Una lista que contenga el objeto con tus datos personales y 
const obj1 = obj;
console.log(obj1);
//un nuevo objeto con los datos personales de tus dos mejores amig@s
const lista = [
    {nombre: "Americo",apellido:'Valderrama',edad:55,altura:170},
    {nombre:'Heriberto', apellido:'Martinez',edad:57,altura:172}
]
console.log(lista);

lista.sort((a, b) => b.edad - a.edad)

console.log(lista)
