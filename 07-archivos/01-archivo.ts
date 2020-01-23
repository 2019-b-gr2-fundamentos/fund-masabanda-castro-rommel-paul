import { leerArchivo } from "./02-leer-archivo";
import { escribirArchivo } from "./03-escribir-archivo";
import { Estudinate } from "./interfaces/estudiante.interface";
import * as prompts from 'prompts';
// por cada funcion vamos a crear un archivo
async function main(){

    let contador = 1;

    const arregloEstudiantes: Estudinate[] = [];
    const arregloPreguntas = [
        {
            type:'text',
            name:'nombre',
            message: 'ingresa tu nombre'
        }
    ];
    const respuestaEstudianteUno = await prompts(arregloPreguntas);

    const nuevoRegistroUno ={
        id: contador,
        nombre: respuestaEstudianteUno.nombre

    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroUno);

    const respuestaEstudianteDos = await prompts(arregloPreguntas);

    const nuevoRegistroDos ={
        id: contador,
        nombre: respuestaEstudianteDos.nombre  
    };
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroDos);

    console.log('Cual usuario quieres Editar');
    console.log(arregloEstudiantes);

    // operadores!!! -> reemplaza al for
    const idABuscar = await prompts({
        type:'number',
        name:'id',
        message: 'ingresa el ID del regristo a editar'

    })


    const indiceEcontrado = arregloEstudiantes.findIndex( // return condicion
   
        function(valorActual, indice, arreglo){
            console.log(valorActual);
            console.log(indice);
            console.log(arreglo);
            return valorActual.id == idABuscar;
        }
    )
    console.log('Indice encontrado;', indiceEcontrado);
    const nombreAEditar = await prompts({
        type: 'text',
        name:'nombre',
        message:'Ingresa el nuevo nombre'
    })
    arregloEstudiantes[indiceEcontrado].nombre = nombreAEditar.nombre;
    console.log(arregloEstudiantes);

      const buscar = await prompts({
        type: 'text',
        name:'nombre',
        message:'Buscar por ID o por NOMBRE'
          
      });
      const estudinateEncontrado = arregloEstudiantes
      .find(
          function(valorActual){
              return valorActual.nombre = buscar.nombre;
          }
      );
      console.log(estudinateEncontrado);

    
   





    //const textoLeido = leerArchivo('./ejemplo.txt');
    
    //const nuevoContenido = 'TENGO HAMBRE :( ';
    //escribirArchivo('./ejemplo.txt', );

    //console.log(textoLeido + nuevoContenido);
}
main();