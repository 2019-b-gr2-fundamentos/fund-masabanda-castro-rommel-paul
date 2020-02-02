import { moviminetoEjeX } from "./funciones/moviminetoEjeX";
import { movimientoEjeY } from "./funciones/movimientoEjeY";
import { sentidoDelMovim } from "./funciones/sentido-v-o-h";

async function main(){
    let numA = await moviminetoEjeX();
    let numB =await movimientoEjeY();
  

    let horizontalovertical = await sentidoDelMovim();
    
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


