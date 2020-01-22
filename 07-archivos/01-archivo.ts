import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";

// por cada funcion vamos a crear un archivo
function main(){
    const textoLeido = leerArchivo('./ejemplo.txt');
    
    const nuevoContenido = 'TENGO HAMBRE :( ';
    escribirArchivo('./ejemplo.txt', );

    console.log(textoLeido + nuevoContenido);
}
main();