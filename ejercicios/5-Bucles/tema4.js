//Break se utiliza para interrumpir un bucle.
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    console.log(i);
}

// 0 1 2
//El código anterior se detiene si se encuentran 3 en el proceso de iteración.

//Usamos la palabra clave continue para omitir ciertas iteraciones.

for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}

// 0 1 2 4 5