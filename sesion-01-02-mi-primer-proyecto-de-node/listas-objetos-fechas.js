//listas y arreglos
const lista=[1,"hola",true,undefined,null];
const lista2=new Array(2,"hola",true,undefined,null);
const lista3=new Array(3);
lista3[0]="soy el primer elemento, index0";
const lista4=[lista,lista2,lista3];

console.log(lista)
console.log(lista2)
console.log(lista3)
console.log(lista4)

//Objetos
const movil={
    altura:10,
    anchura:5,
    marca:"Xiomi",
    isWhite:false,
    contactos:["Pedro","Pablo","Johanna"],
    tarjeta:{
        marca:"Sandisk",
        almacenamiento:32
    }
}
console.log(movil.contactos)
console.log(movil.tarjeta)
console.log(movil.tarjeta.marca)
//asignar nuevos atributos al objeto
movil.anyo=2019
console.log(movil.anyo)
//cambiar los valores de los atributos del objeto
movil.anchura=7
console.log(movil.anchura)

//Fechas - librerias de apoyo
const ahora=new Date();
console.log(ahora)

const fecha_milis=new Date(10)
console.log(fecha_milis)

const fecha_cadena=new Date("march 15 2009")
console.log(fecha_cadena)

const fecha_valore=new Date("2022,5,12")
console.log(fecha_valore)

//enero es el 0
const dia=ahora.getDate()
const mes=ahora.getMonth()+1
const anyo=ahora.getFullYear()

console.log(dia,mes,anyo)
