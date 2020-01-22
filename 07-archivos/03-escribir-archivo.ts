import * as fs from 'fs';
export function escribirArchivo(contenido: string){
    fs.writeFileSync(
        './ejemplo.txt', //path
        'NUEVO CONTENIDO :D' + contenido,
        'utf8'
    );

}