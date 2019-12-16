// for 
// necesitamos
// 1) declarar una variables
// 2) condicion (expresion)
// 3) incrementar, disminuir  
for(let numeroExDeMiCrush = 7 ;numeroExDeMiCrush != 0; numeroExDeMiCrush--){
    console.log(`ES CAN DA LO`, numeroExDeMiCrush);
}

for( let numeroExDeMiCrush1 = 0; numeroExDeMiCrush1 <=6; numeroExDeMiCrush1++){
    console.log(`ES CAN DA LO`, numeroExDeMiCrush1);
}

for(let numeroExDeMiCrush2 = 9; numeroExDeMiCrush2>=4; numeroExDeMiCrush2--){
    console.log( `escandalo`,numeroExDeMiCrush2)
}

// ARREGLOS
// 1elemento(variables

//conjunto DIFERENTES ELEMENTOS ()
//let-----> reasignar
//const---> no reasigna valores
const arreglosNumeros = [1, 2, 3, 4, 5];
arreglosNumeros.push(6); //FUNCION
console.log(`arregloNumeros`, arreglosNumeros);
arreglosNumeros.pop();
console.log(`arregloNumeros`,arreglosNumeros);
//arreglo
// 1) Elementos
// 2) Indice ( 0 index based)-> posicion
// 3) longitud de los arreglos -> cantidad de elementos
console.log(arreglosNumeros.length);
// For
//1) let = arreglosNumeros.length -> 5
//2) tamaño >+
//3) --
for(let arreglosNumeros.length ; arreglosNumeros >0; arreglosNumeros --){
    //console.log(arreglosNumeros);
//} 

// acceder a cada elmento del arreglo por el indice
const indiceElementoUno = 0;
arreglosNumeros[indiceElementoUno]; //1
arreglosNumeros[0];//1
const inideceElemntoCinco = 4;
arreglosNumeros[inideceElemntoCinco];



//Acceder al elemento 5
//1) indice
//[1. 2. 3. 4, 5]
// 0 1 2 3 4 5 
//
console.log(arreglosNumeros[inideceElemntoCinco]);
console.log(arreglosNumeros[4]);

// 1) crear un arreglo de 5 elemntos
const arreglo =[] 
//2) cada elemento 1 o un 0
// ej:[0,0,1,1,0]
//3) exista al menos un elemento "1"
// ej:[0,0,0,0,0] no es valido
// ej:[0,0,0,0,1]
}