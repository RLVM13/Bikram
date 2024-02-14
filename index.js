
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

const a11=[5,7,3,5,8,4,3,2];
function obtenerPares(arrayP) {
    let arrayPAux=[];
    for (let i = 0; i < arrayP.length; i++) {
        if (arrayP[i] % 2 === 0) {
            arrayP.push(arrayP[i]);
        }
    }
    return arrayPAux;
}
obtenerPares(a11);

const a12=[0,1,2];
function pintarArray(array12) {
console.log(array12);
let array12Aux=[];
array12=array12.toString();
console.log(array12);
array12Aux=array12.split();
console.log(array12Aux);
console.log(array12Aux[0]);
return array12Aux;
}
pintarArray(a12);

function arrayMapi(array13,funcion13){

}

const a14=[3,5,5,2,7];
function eliminarDuplicados(array14){
    let arrayAux= new Set(array14);
    console.log(arrayAux);
    return arrayAux;
}
eliminarDuplicados(a14);

//ITERACIONES PROYECTO
// Arrays (15-18)

let arrayNumerosNeg=[0,-1,-2.-3,-4,-5,-6,-7,-8,-9];
const holaMundo=["Hola","Mundo"];
const loGuardoTodo=["hola","que",23,42.33,"tal"];
const arrayDeArrays=[[756,"nombre"],[255,"apellido"][298,"direccion"]];

//Funciones (19-22)

function multiplicacion (n1, n2){
    let resul=n1*n2;
    return resul;
}
multiplicacion(5,5);

function division(n1,n2){
    let resul=n1/n2;
    return resul;
}
division(6,2);

function esPar(num){
    if(num%2===0){
        return true;
    }
    else return false;
}
esPar(8);

const arrayFunciones=[suma(a,b),resta(a,b),multiplicacion(a,b)];

//Mezclando arrays y funciones (23-26)

const a=[6,3,7,2,9];
function ordenarArray2(array23){
    array23.sort((a,b) => a-b);
    console.log(array23);
    array23.reverse();
    console.log(array23);
    return array23;
}
ordenarArray2(a);

const impares=[2,5,4,7,9,3,66];
function obtenerImpares(array24){
    for(let i=0;i<array24.lenght;i++){
        if (array24[i]%2 === 0){

        }

    }
}
obtenerImpares(impares);