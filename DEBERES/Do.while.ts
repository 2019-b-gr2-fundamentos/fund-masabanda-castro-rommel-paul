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
     if(ingles %13 == 0){
         ingles = ingles +1;
