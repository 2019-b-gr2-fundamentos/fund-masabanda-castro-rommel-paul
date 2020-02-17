import { moviminetoEje1X } from "./moviminetoEjeX";

import { registroMovimientos } from "./registro-de-movimientos";


export async function jugador2 (){

    let num1x = await moviminetoEje1X();
  

    let matrix = await registroMovimientos(num1x);
    console.log(matrix);

    return matrix;

}