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

*/
