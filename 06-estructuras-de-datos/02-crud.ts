// 02-crud.ts create read update delete
//const prompts = requiere('prompts');
import * as prompts from 'prompts';
import { RespuestaEdad } from './respuesta-edad.interface';
import { RespuestaNombre } from './respuesra-nombre.interface';


/*
function obtenerDatosAnimalPerrito(){
    //paradigma de programacion
    //sincrono vs asincrono
    console.log('inicio');
    const promesaEdad = prompts({ // promesa
        type: 'number',
        name: 'edad',
        message: 'puedes darme tu edad',
    });
    console.log(promesaEdad);
    
    promesaEdad
        .then( // ok
            (datos)=>{
                console.log('datos',datos); //aqui puedo seguir

                const promesaNombre = prompts({ // promesa
                    type: 'text',
                    name: 'nombre',
                    message: 'puedes darme tu nombre',
                });
                console.log(promesaNombre);
                promesaNombre
                    .then( // ok
                        (datos)=>{
                            console.log('Nombre',datos); //aqui puedo seguir
            
                            
                        }
                    )
                    .catch( // =(
                        (error)=>{
                            console.log('error',error);
                        }
                    );
            


            }
        )
        .catch( // =(
            (error)=>{
                console.log('error',error);
            }
        );

    console.log('fin');
    
}*/
async function obtenerDatosAnimalPerritoSincrono(){
    
        //paradigma de programacion
        //sincrono vs asincrono
        console.log('inicio');
        const preguntas = [
            {
            type: 'number',
            name: 'edad',
            message: 'puedes darme tu edad',
            },
            {
            type: 'text',
            name: 'nombre',
            message: 'puedes darme tu nombre',
            },
            {
            type: 'text',
            name: 'cedula',
            message: 'puedes darme tu cedula',
            }
                
                                                            
        
        ]
        const RespuestaEdad = await prompts(preguntas);
        console.log('respuestaEdad', RespuestaEdad);
        console.log('fin');
    


}
function main(){
    // npm unistall-g tsc -> WINDOWS
    // npm install -g typescript -> WINDOWS
    // sudp npm unis
    //obtenerDatosAnimalPerrito();
    obtenerDatosAnimalPerritoSincrono()
    .then()
    .catch(); // -> promesa // sincrona 

}
main();
/*(20/01/20) la forma de programar de manera sincrono solo funciona dentro de funciones

*/


/*
hay funciones q devuelven promesas (se puede o no cunmplir)

(deber juego)

(primer juego puzzle numeros, crear una matirz mediante el teclado le decimos al usuario que pieza quiere mover por ejemplo la posicion 11 a la posicion 21
    solo pse puede mvoer una pieza a otra-----comparar una matriz
    no solo guardar numeros si no una estructura de datos con numero y si esta oucpado
    mostrar el tablero)

(juego 2 una matriz con 1 y 0 los ocmplejo es colocar las candiciones para ganar dos jugadores qu coloquen la 
    posicion)

(juego 3 el ahoracado definir cuantas equivocaciones se puede tener---definir cuantas cosas se dibuja )

(juego cuatro palitos---)

(juego carta intermedia es una arreglo el cual se mezclara--se toma dos cartas se elije la opcion dentro o fuera-
    se apuesta se gana o se mete al pozo)

(juego cinco
    )

*/

