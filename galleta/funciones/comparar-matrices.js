//function compararMatriz(matrizUno: number[][], matrizDos: number[][]): boolean
//  let matrizA = matr
var contA = 1;
var contB = 1;
var matriz1 = [
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
];
var matriz2 = [
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
];
for (var i = 0; i < matriz1.length; i++) {
    for (var j = 0; j < matriz1[0].length; j++) {
        matriz1[i][j] = contA;
        contA++;
    }
    for (var f = 0; f < matriz2.length; f++) {
        for (var c = 0; j < matriz2[0].length; c++) {
            matriz2[f][c] = contB;
            contB++;
        }
    }
}
if (matriz1[i][j] == matriz2[f][c]) {
    console.log("iguales");
}
else {
    console.log("diferentes");
}
//}
//let funciona = compararMatriz(matriz1, matriz2);
//console.log(funciona);
