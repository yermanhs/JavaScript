

let f=1
for (let i = 10; i >1; --i) {
    console.log(i)
    f=f*i
    console.log(f)
}

let w=1
let a=10
while (a >1) {
    console.log(a)
    w=w*a
    --a
    console.log(w)
}

//Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y 
//una sentencia break
let x=1
let b=10
while (b>1) {
    console.log(b)
    x=x*b
    b--
    console.log(x)
    if (b==1) {
        break;
    }
}