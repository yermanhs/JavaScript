//Itera de 0 a 10 usando el bucle for, haga lo mismo usando los bucles while y do while
for(let i = 0; i<=10;i++){
    console.log(i)
}

let x=0
while(x<=10){
    console.log(x)
    x++
}

let a = 0
do {
    console.log(a)
    a++
} while (a <= 10)

//Itera 10 to 0 usando el bucle for, haga lo mismo usando los bucles while y do while
for(let i = 10; i>=0;i--){
    console.log(i)
}

let y=10
while(y>=0){
    console.log(y)
    y--
}

let b = 10
do {
    console.log(b)
    b--
} while (b >= 0)

//Itera de 0 a n usando el bucle for
let n=5
for(let i=0; i<=n;i++){
    console.log(i)
}
//Escribe un bucle que haga el siguiente patrón usando console.log():
for (let i = 0; i < 7; i++) {
    let piso = ''
    for (let j = 0; j < i + 1; j++) {
        piso = piso + '#'
    }
    console.log(piso)
}
/*  #
    ##
    ###
    ####
    #####
    ######
    ####### */

//Usa un bucle para imprimir el siguiente patrón:
/*  0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100 */
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

//    Usando un bucle imprime el siguiente patrón:
/*   
     i    i^2   i^3
     0    0     0
     1    1     1
     2    4     8
     3    9     27
     4    16    64
     5    25    125
     6    36    216
     7    49    343
     8    64    512
     9    81    729
     10   100   1000
    */
for (let i = 0; i <= 10; i++) {
    console.log(`${i}  ${i**2} = ${i ** 3}`)
}
//Usa el bucle for para iterar de 0 a 100 e imprima solo números pares
for (let i = 0; i <= 100; i++) {
    if (i%2===0){
        console.log(i)
    }
}
//Usa el bucle for para iterar de 0 a 100 e imprima solo números impares
for (let i = 0; i <= 100; i++) {
    if (i%2!==0){
        console.log(i)
    }
}
//Usa el bucle for para iterar de 0 a 100 e imprima los solo números primos
let num = 1
while(num<=100){
    let contador = 1
    let a = 0
    while (contador <= num) {
        if(num%contador===0){
            a++
        }
    contador++
    }
    if(a==2){
        console.log(num)
    }
    num++
}

//Usa el bucle for para iterar de 0 a 100 e imprima la suma de todos los números.
let suma=0
for (let i = 0; i <= 100; i++) {
    suma+=i
}
console.log(suma)
//La suma de todos los números de 0 a 100 es 5050.

//Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares.
let sumap = 0
for (let i = 0; i <= 100; i++) {
    if (i%2===0){
        sumap+=i
    }
}
let sumai= 0
for (let i = 0; i <= 100; i++) {
    if (i%2!==0){
        sumai+=i
    }
}
console.log(`la suma de los pares es ${sumap} y la suma de impares es ${sumai}`)
//La suma de todos los pares de 0 a 100 es 2550. Y la suma de todos los impares de 0 a 100 es 2500.

//Usa el bucle para iterar de 0 a 100 e imprimir la suma de todos los pares y la suma de todos los impares. Imprimir suma de pares y suma de impares como un array
//[2550, 2500]
let sumapares = 0
for (let i = 0; i <= 100; i++) {
    if (i%2===0){
        sumapares+=i
    }
}
let sumaimpares= 0
for (let i = 0; i <= 100; i++) {
    if (i%2!==0){
        sumaimpares+=i
    }
}
let array = []
array[0]=sumapares
array[1]=sumaimpares
console.log(array)