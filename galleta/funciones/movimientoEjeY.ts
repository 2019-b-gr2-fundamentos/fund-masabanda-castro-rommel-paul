import { movimientoEjeY } from "./interfaces/coordenaja-eje-y"
import * as prompts from 'prompts';

export async function movimientoEjeY (){
    const coordenadaY = 
    {
        type:'number',
        name:'ejeY',
        message: 'Ingrese el valor de la coordenada en Y \n Recuerde solo se admite valores de 0 a 3',
        validate: value => (value >= 0 && value <= 3 )
    }
    const respuestaCoordenadaY:movimientoEjeY = await prompts(coordenadaY);
    return respuestaCoordenadaY.ejeY
}