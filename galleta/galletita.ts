import { moviminetoEje1X, moviminetoEje2X } from "./funciones/moviminetoEjeX";
import { movimientoEje1Y, movimientoEje2Y } from "./funciones/movimientoEjeY";
import { sentidoDelMovim } from "./funciones/sentido-v-o-h";

async function main(){
    let numA = await moviminetoEje1X();
    let numj = await moviminetoEje2X();
    let numB = await movimientoEje1Y();
    let numG = await movimientoEje2Y();
  

    //let horizontalovertical = await sentidoDelMovim();
    
    const puntitos = 
    [
        [1, 1, 1, 1],
        [0, 0, 0, 1],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    console.log(puntitos.length[1]);

    
   
}
main();


