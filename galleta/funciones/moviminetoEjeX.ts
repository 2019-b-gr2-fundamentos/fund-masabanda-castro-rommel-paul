import { movimientoEjeX } from "./interfaces/coordenada-eje-x-interface";
import * as prompts from 'prompts';

export async function moviminetoEjeX (){
//const arregloEjeX: movimientoEjeX  [] =[]
const coordenadaX =
{
    type: 'number',
    name: 'ejeX',
    message: 'Ingrese el valor de la coordenada en x \n Recuerde solo se admite valores de 0 a 3 =)',
    validate: value => (value >= 0 && value <= 3 )
}
const respuestaCoordenadaX:movimientoEjeX = await prompts(coordenadaX);
return respuestaCoordenadaX.ejeX 

}