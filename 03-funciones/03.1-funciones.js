//para que sea un arreglo de multiples dimensiones sus elementos deben ser arreglos
var arregloDosDimensiones = [
    [1, 2, 3, 4],
    [4, 5, 6, 7]
];
arregloDosDimensiones[0]; //[1,2,3,4]
arregloDosDimensiones[0].length; //4
arregloDosDimensiones[1]; //[4,5,6,7]
arregloDosDimensiones.length; //2
arregloDosDimensiones[0][0];
arregloDosDimensiones[0][1];
arregloDosDimensiones[1][0];
arregloDosDimensiones[1][1];
//return [0,0,1*4-2*3]
// definir el tamaño
//repetir calculo n veces (n=tamaño)
//1er lemento 1er erreglo
//ultimo elemento del 2do arreglo
//sumar los elementos
//1er elemento 1er+1 = 2do elemento 1er arreglo
// ultimo elemento-1=penultimo del 2doarreglo
//suma los elementos
function tamañoDelArreglo(arregloDosDimensiones) {
    return arregloDosDimensiones[0].length;
}
console.log(tamañoDelArreglo);
