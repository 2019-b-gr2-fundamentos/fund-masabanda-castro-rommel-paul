import { moviminetoEje1X } from "./moviminetoEjeX";

import { registroMovimientos } from "./registro-de-movimientos";
import { sentidoDelMovim } from "./sentido-v-o-h";

export async function jugador1 (){

    let num1x = await moviminetoEje1X();
  

    let matrix = await registroMovimientos(num1x);
    console.log("Su movimiento fue la linea",matrix);

    return matrix;

}