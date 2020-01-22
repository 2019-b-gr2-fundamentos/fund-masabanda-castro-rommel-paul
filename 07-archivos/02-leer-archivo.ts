import * as fs from 'fs';

export  function leerArchivo(path:string):string{
  
    const resultado = fs.readFileSync(
        path, //path
        'utf-8' //codificacion
    );
    console.log(resultado);
    return resultado;
}