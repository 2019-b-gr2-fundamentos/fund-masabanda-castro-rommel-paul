import { movimientoEjeX } from "./interfaces/coordenada-eje-x-interface";
import * as prompts from 'prompts';

export async function moviminetoEje1X (){
//const arregloEjeX: movimientoEjeX  [] =[]
const coordenadaX =
{
    type: 'number',
    name: 'eje1X',
    message: 'Ingrese el valor de la coordenada en X1 \n Recuerde solo se admite valores de 0 a 3 =)',
    validate: value => (value >= 0 && value <= 3 )
}
const respuestaCoordenadaX:movimientoEjeX = await prompts(coordenadaX);
return respuestaCoordenadaX.eje1X 
}
export async function moviminetoEje2X (){
    //const arregloEjeX: movimientoEjeX  [] =[]
    const coordenadaX =
    {
        type: 'number',
        name: 'eje2X',
        message: 'Ingrese el valor de la coordenada en X2 \n Recuerde solo se admite valores de 0 a 3 =)',
        validate: value => (value >= 0 && value <= 3 )
    }
    const respuestaCoordenadaX:movimientoEjeX = await prompts(coordenadaX);
    return respuestaCoordenadaX.eje2X 
    }