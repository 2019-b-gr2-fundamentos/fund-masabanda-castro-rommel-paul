import { jugador } from "./funciones/jugador";
import { Bienvenida, Name1, Name2 } from "./funciones/nombre";
import { compararMatriz } from "./funciones/comparar-matrices";
async function main(){


    let turnos = 0;

    await Bienvenida();
    await Name1();
    await Name2();

    let a = await jugador().catch().then();
    let b = await jugador().catch().then();
    
    let cero = await compararMatriz( a, b ).catch().then();
    console.log(cero);

    
    //let c = await jugador();
    //let d =await jugador();


       

        
    
    





  


}
main();


