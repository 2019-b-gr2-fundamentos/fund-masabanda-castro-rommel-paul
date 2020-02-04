import { moviminetoEje1X, moviminetoEje2X } from "../funciones/moviminetoEjeX";
import { movimientoEje1Y, movimientoEje2Y } from "../funciones/movimientoEjeY";
import { registroMovimientos } from "../funciones/registro-de-movimientos";

export async function jugador (){

    let num1x = await moviminetoEje1X();
    let num2x = await moviminetoEje2X();
    let num1y = await movimientoEje1Y();
    let num2y = await movimientoEje2Y();

    let matrix = await registroMovimientos(num1x, num2x, num1y, num2y);
    console.log(matrix);

    return matrix;

}