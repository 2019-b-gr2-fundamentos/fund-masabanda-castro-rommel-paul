// arreglos
// posee elemntos--indices--longitud
// definimos una arreglo
var arregloNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//acceder
// para acceder a un arreglo se necesita del indice
console.log(arregloNumeros[6]); // imprime 7
//añadir al final
// necesito: elemento a anadirse
arregloNumeros.push(11);
console.log(arregloNumeros);
//borrar al final
arregloNumeros.pop();
//anadir en un indice
// necesito el indice y el elemento
arregloNumeros.splice(1, 0, 1.2);
console.log(arregloNumeros);
//o borrar
arregloNumeros.splice(7, 1);
// buscar indice de un elemento
arregloNumeros.indexOf(5); //5
console.log(arregloNumeros);
arregloNumeros.indexOf(7);
console.log(arregloNumeros);
arregloNumeros[0] = 999;
console.log(arregloNumeros);
// pseudo codigo del splice solo cuando añades
// 1) dado un arreglo de elementos ordenados
// 2) definir el elemento que se quiere ubicar en el arreglo
// 3) ubicar el indice entre el cual se quiera ubicar el elemento
