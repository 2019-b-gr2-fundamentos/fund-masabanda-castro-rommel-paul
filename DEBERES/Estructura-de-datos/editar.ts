import {pokedex} from './new';
import {leer} from './leer';
import {GasesNobles} from './estructuraDato';
import * as prompts from 'prompts';
import {escribir} from './escribir'

export async function editar(){

    
    const archivoleido = leer('./arreglo.txt');
    const archivoCargado = JSON.parse(archivoleido);
    
    const archivoConEstructura: GasesNobles [] = archivoCargado;
    //
    const idBuscar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingresa el ID del pokemon que desea editar'
    });
    const idModificar = archivoConEstructura.findIndex(   
        function (valorActual, indice, arreglo){
            return valorActual.id == idBuscar.id; 
        } 
    );
    
    const newNombre = await prompts(
        { 
            type: 'text',
            name: 'nombre',
            message: 'Ingresa el nombre del elemento'
        }
    );
    archivoConEstructura[idModificar].nombre = newNombre;
    const newTipo = await prompts(
        { 
            type: 'text',
            name: 'simbolo',
            message: 'Ingresa el simbolo del elemento'
        }
    );
    archivoConEstructura[idModificar].simbolo = newTipo;
    const newNivel = await prompts(
        { 
            type: 'number',
            name: 'numeroAtomico',
            message: 'Ingresa el numero atomico del elemento'
        }
    );
    archivoConEstructura[idModificar].numeroAtomico = newNivel;
    const newEdad = await prompts(
        { 
            type: 'number',
            name: 'masaAtomica',
            message: 'Ingresa la masa atomica del elemento'
        }
    );
    archivoConEstructura[idModificar].masaAtomica = newEdad;
    archivoConEstructura[idModificar].numeroAtomico = newNivel;
    const newestado = await prompts(
        { 
            type: 'number',
            name: 'estadoOxidacion',
            message: 'Ingrese el estado de oxidacion del elemento'
        }
    );
    archivoConEstructura[idModificar].estadosDeOxidacion = newestado;
/*

            


        archivoConEstructura[idModificar] = {
            id: idModificar,
            nombre: newdatosIngresoPokedex.nombre,
            apodo: newdatosIngresoPokedex.apodo,
            tipo: newdatosIngresoPokedex.tipo,
            nivel: newdatosIngresoPokedex.nivel,
            edad: newdatosIngresoPokedex.edad

        };

    */

    const arregloFinal = JSON.stringify(archivoConEstructura);

    escribir(
        './arreglo.txt',
        arregloFinal
    );
   
    pokedex();

}