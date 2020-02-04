import * as prompts from '../node_modules/prompts';
import {Name} from './interfaces/name';

export async function Name1(){
   

    const nombres= [
        {
            type: 'text',
            name: 'jugadorUno',
            message: 'Ingrese el nombre del primer jugador'
        }
        
    ];
    const respuestaNombre:Name = await prompts(nombres);
    return respuestaNombre.nombreJugadorUno 
};

export async function Name2(){
    const nombres= [
        {
            type: 'text',
            name: 'jugadorDos',
            message: 'Ingrese el nombre del segundo jugador'
        }
    ];
    const respuestaNombre:Name = await prompts(nombres);
    return respuestaNombre.nombreJugadorDos
}





export function Bienvenida(){
    
    console.log(".:Bienvenidos al juego de la Galletita:.\n");
    console.log('NOTA !!!!!');
    console.log('Indicar las coordenadas en X y en Y para trazar la linea !!!');
    console.log('Tablero\n');
    console.log("     0,0    0,1    0,2    0,3 ");
    console.log("      . ____ . ____ . ____ .  ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("1,0  │. ---- . ---- . ---- .│ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("2,0  │. ---- . ---- . ---- .│ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("     │ │    │ │    │ │    │ │ ");
    console.log("3,0  │. ---- . ---- . ---- .│ ");

    
};


export async function Ordenar(){
    let i, x, j, y;
    let f= 2;
    let c=2;
    let menor: any;
    let matriz =[
        [1,2],
        [3,5]
    ]
    for(i=0; i>f; i++)
     {
        for(j=0; j>c; j++)
        {
            for(x=0; x>f;x++)
            {
                for(y=0; y>c; y++)
                {
                    if(matriz[i][j]<matriz[x][y])
                    {
                        menor=matriz[i][j];
                        matriz[i][j]=matriz[x][y];
                        matriz[x][y]=menor;
                    }
 
                }
            }
         }
    }
// imprimir
for(i=0;i<f;i++){
    for(j=0; j<c;j++){
        console.log(matriz[i][j]);
    }
}
}


    console.log(".:Bienvenidos al juego de la Galletita:.\n");
    //Name().then().catch();
    //Ordenar();


    
