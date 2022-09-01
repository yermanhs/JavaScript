//Una función sin parámetros que devuelva siempre "true"
function sinParametros() {
    return true
}
sinParametros()
typeof sinParametros

/*Una función asíncrona que utilice 
un setTimeout y pase por consola un 
"Hola soy una promesa" 5 segundos después 
de haberse ejecutado*/
//setTimeout(function, millisegundos, parametro, parametro, ...);

setTimeout(function(){
    console.log("Hola soy una promesa")
}, 5000)

//Una función generadora de índices pares automáticos
function* generaId() {
    let id = 2;
    while(true) {
        id+=2
        yield id
    }
}

const gen = generaId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
