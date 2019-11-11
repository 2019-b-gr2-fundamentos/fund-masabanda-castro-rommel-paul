/* El programa contara el numero de deberes que se debe hacer 
de cada materia con respecto a la siguietente tabla cuyo orde de
importacia es desde el 13 a 1.
1 Analisis socioeconomico
2 Algebra
3 compiladores
5 fundamentos de progrmacion
7 calculo 
11 fisica
13 ingles 
Es decir analizara si el numero correspondiente y vera si es multplo
o no si lo es es aumentara un debere en la materia que cumpla las condiciones.
*/
let tareas = 0
let ingles = 0
let fisica = 0
let calculo = 0
let fundamentos = 0
let compiladores = 0
let algebra = 0
let socioeconomico =0 

do{
    tareas = tareas + 1;
    if(tareas %13 == 0){
        ingles = ingles +1;       
        }else{
            if(tareas %11 ==0){
                fisica = fisica + 1;                
            }else{
                if(tareas %7 ==0){
                    calculo = calculo + 1;                    
                }else{
                    if(tareas %5 == 0){
                        fundamentos = fundamentos + 1;                       
                    }else{
                        if(tareas %3 ==0){
                            compiladores = compiladores +1;
                        }else{
                            if(tareas %2 ==0){
                                algebra = algebra +1;                          
                            }else{
                                if(tareas %2 !==0){
                                    socioeconomico = socioeconomico + 1;                               
                                }
                            }
                        } 
                    }
                }
            }
        }
}while(tareas < 1000)
console.log("El numero de deberes de cada materia:")
console.log(socioeconomico, "deberes de socioeconomico");
console.log(algebra,"deberes de algebra");
console.log(compiladores,"deberes de compiladores");
console.log(fundamentos,"deberes de fundamentos");
console.log(calculo,"deberes de calculo");
console.log(fisica,"deberes de fisica");
console.log(ingles,"deberes de fisica");