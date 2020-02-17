import { sentidoMovimiento } from "./interfaces/sentido-del-movimineto"
import * as prompts from 'prompts';

export async function sentidoDelMovim(){
    const SentidoMovimiento = 
    {
        type: 'number',
        name: 'sentidoDelMovimiento',
        message: 'Establesca el sentido de su recta \n 0 para (horizontal), o 1 para (vertical)',
        validate: value => (value == 0 || value == 1 )
    }
    const respuestaSentidoMovimiento:sentidoMovimiento = await prompts(SentidoMovimiento);
    return respuestaSentidoMovimiento.sentidoDelMovimiento
}