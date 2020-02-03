//function compararMatriz(matrizUno: number[][], matrizDos: number[][]): boolean
//  let matrizA = matr
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
    [0, 0],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
    [1, 1],
];
var soniguales = 1;
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 2; j++) {
        var valorMatriz1 = matriz1[i][j];
        var valorMatriz2 = matriz2[i][j];
        if (valorMatriz1 != valorMatriz2) {
            soniguales = 0;
        }
    }
}
if (soniguales) {
    console.log("son iguales");
}
else {
    console.log("son diferentes");
}
/*        }
        for (var f =0; f< matriz2.length; f++){
            for(var c = 0; j< matriz2[0].length; c++)
            {
                matriz2[f][c] = contB;
                contB ++;
            }
        }
    }
    if (matriz1[i][j] == matriz2[f][c]) {

        console.log("iguales");
    } else {
        console.log("diferentes");
    }
*/
//}
//let funciona = compararMatriz(matriz1, matriz2);
//console.log(funciona);
