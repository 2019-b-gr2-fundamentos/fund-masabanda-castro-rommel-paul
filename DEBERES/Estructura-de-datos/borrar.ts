import {pokedex} from './new';
import {leer} from './leer';
import {GasesNobles} from './estructuraDato';
import * as prompts from 'prompts';
import {escribir} from './escribir'

export async function borrar(){
   
    

    const archivoleido = leer('./arreglo.txt');
    const archivoCargado = JSON.parse(archivoleido);
    
    const archivoConEstructura: GasesNobles [] = archivoCargado;
    //
    const idBuscar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingresa el ID del elemento que desea buscar'
    });
    const idModificar = archivoConEstructura.findIndex(
        function (valorActual){
            return valorActual.id == idBuscar.id; 
        } 
    );
    
    archivoConEstructura[idModificar] = '';

    const arregloFinal = JSON.stringify(archivoConEstructura);

    escribir(
        './arreglo.txt',
        arregloFinal
    );
   
    pokedex();

}