let numeroUno = 1;  // notacion camelCase
const numeroDos =2;
let resultado = 0;
// SUMA
resultado = 1 + 2;
// RESTAR
resultado = 1 - 2;
// MULTIPLICAR
resultado = 1 * 2;
//EXPONENCIAL
resultado = 1 ^ 2;
// MOD
resultado = 4 % 2; // 0 -> residuo
resultado = 4 % 3; // 1 -> residuo
resultado = 7 % 3; // 1 -> residuo 

console.log("pera"+ 2);

// STRINGS
const mensaje = "\"Hola mundo\"";
const saludo = '\'Adio\s mundo\'';
console.log(mensaje + "1\t\t\t 3\n" + saludo);

//template stings 
const edad = 30;
const saludoEdad = `Mi edad es: \n${edad}`;
const saludoCompleto = `${mensaje}\n${saludo}`;
console.log(saludoEdad);
console.log(saludoCompleto);
// Contamos los elementos
const nombreLongitud = " vicente adrian ";
console.log(nombreLongitud.length);
// Eliminar espaccios al principio y al final
console.log(nombreLongitud.trim());
// cambiar a mayusculas

/*console.log(nombreLongitud.toUpperCase());
console.log(nombreLongitud.toLowerCase());
console.log(nombreLongitud.replace("e","o"));
console.log(nombreLongitud.replace("a","o"));
console.log(nombreLongitud.replace("\n",""));
*/

console.log(nombreLongitud);
console.log(nombreLongitud.replace("x","o"));
console.log(nombreLongitud);
console.log(nombreLongitud.replace("a","o"));
console.log(nombreLongitud);
console.log(nombreLongitud.search("z")); // -1
console.log(nombreLongitud.search("adrian")); // 
console.log(nombreLongitud.slice(0,6)); //

console.log(nombreLongitud.indexOf("a"));
console.log(nombreLongitud.indexOf("x"));
console.log(nombreLongitud.includes(" "));      //booleano
console.log(nombreLongitud.includes("x"));      //booleano
console.log(nombreLongitud.endsWith("x"));      //booleano
console.log(nombreLongitud.startsWith("vice")); //booleano
console.log(nombreLongitud.substring(0,6));     //























//NUMEROUNO   -> TODO MAYUSCULA (SEPARACION NO)
//NUMERO_UNO  -> mayusculas guion bajo
//NumeroUno   -> PrimeraLetraDeCadaPalabraConMayuscula
//numerouno   -> 
//numero_uno  -z