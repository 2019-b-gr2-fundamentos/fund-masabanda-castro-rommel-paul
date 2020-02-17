import { movimientoEjeX } from "./interfaces/coordenada-eje-x-interface";
import * as prompts from 'prompts';

export async function moviminetoEje1X (){
//const arregloEjeX: movimientoEjeX  [] =[]
const coordenadaX =
{
    type: 'number',
    name: 'eje1X',
    message: 'Ingrese el numero de la recta que desee trazar',
    validate: value => (value >= 1 && value <= 24 )
}
const respuestaCoordenadaX:movimientoEjeX = await prompts(coordenadaX);
return respuestaCoordenadaX.eje1X 
}
