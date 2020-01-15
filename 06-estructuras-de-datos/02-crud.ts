// 02-crud.ts create read update delete
//const prompts = requiere('prompts');
import * as prompts from 'prompts';
function main(){
    obtenerDatosAnimalPerrito();

}
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
    
}
main();



/*
hay funciones q devuelven promesas (se puede o no cunmplir)


*/