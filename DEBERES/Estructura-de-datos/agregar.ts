import {leer} from './leer';
import {GasesNobles} from './estructuraDato';
import * as prompts from 'prompts';
import { escribir } from './escribir';
import {pokedex} from './new'

export async function agregar(){
    const formatoDeDatos = leer('./arreglo.txt');
   // console.log(formatoDeDatos);

    let formatoConvertido = JSON.parse(formatoDeDatos);

  //  console.log(formatoConvertido);
    //contador
    let contador = 0;
    let minimoID= 0;
    formatoConvertido.forEach( 

            function(valorActual){
                const idActual =valorActual.id;
                if (idActual>minimoID){
                    minimoID = idActual
                }

            }
        );

    minimoID = minimoID +1 ;
    contador = minimoID;
    
    //definiendo arreglo
   // console.log('fffffff');
    const arregloGases: GasesNobles[] = formatoConvertido;
    //definiendo estructura de datos que se piden
    const datosGases = [
        {
            type: 'text',
            name: 'nombre',
            message: 'Ingrese el nombre del elemento'
        },
        {
            type: 'text',
            name: 'simbolo',
            message: 'Ingrese el simbolo del elemento'
        },
        {
            type: 'number',
            name: 'numeroAtomico',
            message: 'Ingrese el numero atomica del elemento'
        },
        {
            type: 'number',
            name: 'masaAtomica',
            message: 'Ingrese la masa atomica del elemento'
        },
        {
            type: 'number',
            name: 'estadosDeOxidacion',
            message: 'Ingrese un estado de oxidacion del elemento'
        }    
    ];

    const respuestasIngresar = await prompts(datosGases);
    
    const nuevoRegistro = {
        id: contador, 
        nombre: respuestasIngresar.nombre,
        simbolo: respuestasIngresar.simbolo,
        numeroAtomico: respuestasIngresar.numeroAtomico,
        masaAtomica: respuestasIngresar.masaAtomica,
        estadosDeOxidacion: respuestasIngresar.estadosDeOxidacion
    };
    
    arregloGases.push(nuevoRegistro);

    const arregloFinal = JSON.stringify(arregloGases);

    escribir(
        './arreglo.txt',
        arregloFinal
    );

    /*
        console.log('primero',arregloFinal);
    
    const prueba = leer('./arreglo.txt');
   // console.log(formatoDeDatos);

    let formatoPrueba = JSON.parse(prueba);
    console.log('segundo',formatoPrueba);
    */
    pokedex();

}