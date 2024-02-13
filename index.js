
// Arrays (1-4)
const arrayVacio = [];
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayNumerosPares = [0, 2, 4, 6, 8];
const arrayBidimensional = [[0, 1, 2],["a", "b", "c"]];

//Funciones (5-9)

function suma(n1, n2) {
    s = n1 + n2;
    return s;
}

function Potencia(base, exponente) {
    let p = Math.pow(base, exponente);
    return p;
}
Potencia(2,3);

function separarPalabras(cadena) {
    let stringArray = cadena.split(" ");
    return stringArray;
}

function repetirString(cad, num) {
    let cadConcatenada="";
    for (let i = 0; i < num; i++) {
        cadConcatenada += cad;
    }
    return cadConcatenada;
}
repetirString("ja",5);
/*
function esPrimo(numer) {
    let contador = 1;
    let primo=0;
    while (numer !== contador) {
        primo = numer % contador;
        if (primo === 0) contador++;
    }
    if (contador > 2)
        {
            console.log("El numero " + numer + " es Primo");
            return true;
        }
    else {
        console.log("El número " + numer + " NO es primo");
        return false;
    }
}*/

//Arrays y Funciones (10-14)
function ordenarArray(ordenarA) {
    return ordenarA.sort((a, b) => a - b);
}

function obtenerPares(arrayP) {
    let movimientos = arrayP.lenght();
    for (i = 0; i < movimientos; i++) {
        if (arrayP[i] % 2 != 0) {
            arrayP.shift();
        }
    }
    return arrayP;
}

function pintarArray(array12) {

}