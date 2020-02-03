import { movimientoEjeY } from "./interfaces/coordenaja-eje-y"
import * as prompts from 'prompts';

export async function movimientoEje1Y (){
    const coordenadaY = 
    {
        type:'number',
        name:'eje1Y',
        message: 'Ingrese el valor de la coordenada en Y1 \n Recuerde solo se admite valores de 0 a 3',
        validate: value => (value >= 0 && value <= 3 )
    }
    const respuestaCoordenadaY:movimientoEjeY = await prompts(coordenadaY);
    return respuestaCoordenadaY.eje1Y
}

export async function movimientoEje2Y (){
    const coordenadaY = 
    {
        type:'number',
        name:'eje2Y',
        message: 'Ingrese el valor de la coordenada en Y1 \n Recuerde solo se admite valores de 0 a 3',
        validate: value => (value >= 0 && value <= 3 )
    }
    const respuestaCoordenadaY:movimientoEjeY = await prompts(coordenadaY);
    return respuestaCoordenadaY.eje2Y
}