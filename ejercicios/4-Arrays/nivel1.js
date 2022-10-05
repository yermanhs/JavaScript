/*
Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
Imprima el array usando console.log().Imprima el número de empresas en el array.
Imprime la primer empresa , la intermedia y la última empresa
Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
Filtre las empresas que tienen más de una 'o' sin el método filter()
Ordene el array usando el método sort()
Invierte la array usando el método reverse()
Cortar las primeras 3 empresas del array
Cortar las últimas 3 empresas del array
*/

const itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log(itCompanies)
console.log(itCompanies.length)

let firstCompani = itCompanies[0]
console.log(firstCompani)
console.log(itCompanies[2])
console.log(itCompanies[itCompanies.length-1])

itCompanies[6]= "y Amazon son grandes empresas de TI"
let text = itCompanies.join(", ")
console.log(text)

let comprobar = itCompanies.indexOf("IBM")
if (comprobar===-1){
    console.log("la empresa no existe")
}else{
    console.log(itCompanies[comprobar])
}

itCompanies[6]="Amazon"
console.log(itCompanies)

itCompanies.forEach(function(letra,index){
    if(letra.includes("o")){
        console.log(`${index} : ${letra}`)
    }
})

itCompanies.sort()
console.log(itCompanies)
itCompanies.reverse()
console.log(itCompanies)

console.log(itCompanies.slice(3))