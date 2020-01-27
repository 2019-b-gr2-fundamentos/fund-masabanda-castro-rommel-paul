import * as prompts from 'prompts';
import {GasesNobles,} from './interfaces/gases-nobles'



console.log("Binvenido");
console.log("Responda las siguientes preguntas");
async function elementos (){

    
    
    const arregloGases: GasesNobles[] = [];
    const propiedades = [
        {
            type: 'number',
            name: 'numeroAtomico',
            message: 'Ingrese el numero atomico del elemento'
        },
        {
            type: 'text',
            name: 'simbolo',
            message: 'Ingrese el simbolo del elemento'
        },
        {
            type: 'number',
            name: 'masaAtomica',
            message: 'Ingrese la masa atomica del elemento'
        },
        {
            type: 'number',
            name: 'estadosDeOxidacion',
            message: 'Ingrese el estado de oxidacion del elemento'
        },
        {
            type: 'number',
            name: 'electronegatividad',
            message: 'Ingrese la electronegatividad del elemento'
        }    
    ]

   async function agrgarElementos (){
       let registroElementos: GasesNobles = await prompts(propiedades);
       arregloGases.push(registroElementos);
        opciones();
        await agrgarElementos;
        console.log(arregloGases);
   }

   async function editarElementos(){
       let indice = await prompts({
           type: 'number',
           name: 'indice',
           message: 'ingrese el indice del la propiedad que desea editar'
       })
       if(indice.indice < arregloGases.length){
           let propiedadEditar = await prompts({
               type: 'text',
               name:'propiedad',
               message:'que desea editar'
           })

           if(propiedadEditar.propiedad == 'numeroAtomico'
           || propiedadEditar.propiedad == 'simbolo'
           || propiedadEditar.propiedad == 'masaAtomica'
           || propiedadEditar.propiedad == 'electronegatividad'
           || propiedadEditar.propiedad == 'estadosDeOxidacion'){
               let valorNuevo = await prompts ({
                   type: 'text',
                   name: 'valor',
                   message: 'Ingrese la nueva informacion'
               })
               let elementoElegido = arregloGases[indice.indice]
                switch (propiedadEditar.propiedad) {
                    case 'numeroAtomico':
                        elementoElegido.numeroAtomico = valorNuevo.valor
                        break;
                    case 'simbolo':
                        elementoElegido.simbolo = valorNuevo.valor
                        break;
                    case 'masaAtomica':
                        elementoElegido.masaAtomica = valorNuevo.valor
                        break;
                    case 'electronegatividad':
                        elementoElegido.electronegatividad = valorNuevo.valor
                        break;
                    case 'estadosDeOxidacion':
                        elementoElegido.estadosDeOxidacion = valorNuevo.valor
                        break;
                }
                opciones();
                await editarElementos;
                console.log(arregloGases);

            }else{
                console.log("debe ingresar el nombre correctamente");
                editarElementos()
            }
            }else{
                console.log('el indice ingresado es erroneo');
                editarElementos()
            } 
       };
       async function opciones (){
           let opciones = await prompts({
               type: 'text',
               name:'eleccion',
               message: 'digite le numero de la operacion que desea realizar \n 1. agregar un elemento \n 2. editar un elemento \n 3. salir'
           });
           await opciones;
           switch (opciones.eleccion){
               case '1':
                   agrgarElementos();
                   
                   break;
                case '2':
                    editarElementos();
                    break;
                case '3':
                    console.log(agrgarElementos);
                    break;
                default:
                    console.log("su ingreso es incorrecto");
                    opciones();
                    break;
           }
          
        }
        agrgarElementos();
           }
elementos();
                
           
       
   
  








