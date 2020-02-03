import * as prompts from 'prompts';
import {GasesNobles,} from './interfaces/gases-nobles';
import { leerArchivo } from './02-leer-archivo';

console.log("Binvenido");
console.log("Responda las siguientes preguntas");

async function main ()
{
    let arregloGases: GasesNobles[] = [JSON.parse(leerArchivo('./ejemplo.txt'))];
    let contador = 1;
    const propiedades = [
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
    ]
    
    await agrgarElementos();

    async function operaciones()
    {   
        let operacionIngresada = await prompts
        ({
            type: 'number',
            name: 'opcion',
            message: 'Ingrese el numero de la operacion que desea realizar: \n1. Agregar un elemento \n2. Editar un elemento \n3. Eliminar un elemento \n 4. Buscar un elemento, \n 5. salir'
        });
        await operacionIngresada;
        switch (operacionIngresada.opcion) {
            case 1:
                await agrgarElementos();
                break;
            case 2:
                await editarElementos();
                break;
            case 3:
                await eliminarElemento();
                break;
            case 4:
               await buscarGas();
               break;
            case 5:
                console.log("fin");
                break; 
                               
            default:
                
                break;
            
        }
       
    };


   async function agrgarElementos (){

        let datoGases = await prompts(propiedades);
        const respuesta = 
        {
            id: contador,
            nombre: datoGases.nombre,
            simbolo: datoGases.simbolo,
            numeroAtomico: datoGases.numeroAtomico,
            masaAtomica: datoGases.masaAtomica,
            estadosDeOxidacion: datoGases.estadosDeOxidacion

        };
        
        arregloGases.push(respuesta);
        console.log(arregloGases[contador-1]);
        contador = contador +1;
        await operaciones();
       
   }

   async function editarElementos(){

       let indice = await prompts(
        {
           type: 'number',
           name: 'id',
           message: 'ingrese el indice que desea editar'
       });
       const indiceEncontrado = arregloGases.findIndex(
           function(valorActual,ind,arreglo){
               return valorActual.id == indice.id;
           }
           
       );
       let indiceActualizado = indiceEncontrado + 1;
           let editado = await prompts(propiedades);
           const respuestaEditada ={
               id: indiceActualizado,
               nombre:editado.nombre,
               simbolo:editado.simbolo,
               numeroAtomico:editado.numeroAtomico,
               masaAtomica:editado.masaAtomica,
               estadosDeOxidacion:editado.estadosDeOxidacion,
           };
        arregloGases[indiceEncontrado] = respuestaEditada;
        
        console.log(respuestaEditada);
        await operaciones();
    }

    async function eliminarElemento(){
        console.log(arregloGases);

        const Buscar = await prompts(
            {
                type: 'number',
                name: 'id',
                message: 'ingresa el id del elemento que desea eliminar'
            }
        );

        const indiceEncontrado = arregloGases.findIndex( 
            function(valorActual){     
                return valorActual.id == Buscar.id; 
            } 
        );
     
        const Vacio = 
        {   
           id:indiceEncontrado + 1 ,
           nombre: '',
           simbolo: '',
           numeroAtomico: '', 
           masaAtomica: '',
           estadosDeOxidacion: ''
        };
        
        if(indiceEncontrado != -1){
            arregloGases.splice(indiceEncontrado , 1 , Vacio);
            console.log(Vacio);
        }

        await operaciones();
    }
async function buscarGas(){
    
        const buscarGasA = await prompts({
            type: 'number',
            name: 'nombre',
            message:'Puede buscar por ID '
        });
        const gasEncontrado = arregloGases.find(
            function(valorActual){
                return valorActual.nombre == buscarGasA.nombre;
            }
        );
        console.log(gasEncontrado);
        await operaciones();
    }
    

    operaciones();

}
main().then().catch();
           
       
   
  








