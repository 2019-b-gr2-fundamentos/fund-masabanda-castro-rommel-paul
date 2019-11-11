// Do while
var vecesQueHeComido = 0;
do{
    console.log("vamos a comer");
    vecesQueHeComido = vecesQueHeComido +1;
    switch(vecesQueHeComido){
        case 1:
        console.log("desayuno");
        break;
        case 2:
        console.log("almuerzo");
        break;
        case 3:
        console.log("merienda");
        break;
    default:
            console.log("gordito");
    }
}while(vecesQueHeComido<=3)
//do
var vecesQueHeComido2 = 0;
while(vecesQueHeComido2 <=3){
    vecesQueHeComido2 = vecesQueHeComido2 + 1;
    console.log("vamos a comer");
    switch(vecesQueHeComido2){
        case 1:
            console.log("desayuno");
            break;
        case 2:
            console.log("almuerzo");
            break;
        case 3:
            console.log("merienda");
            break;
        default:
            console.log("gordito");
            break;
    }
}


/*
1 Analisis socioeconomico
2 Algebra
3 compiladores
5 fundamentos de progrmacion
7 calculo 
11 fisica
13 ingles

PSEUDOCODIGO
si el numero es impar le aumentamos a analisis socioeconomico
si es par aumentamos a algebra 
si es multiplo de 3 aumentamos a compiladores

*/
let deberes =0;
let deberesCompiladores = 0;
let deberesAlgebra = 0
let deberesAnalisis = 0

do{
    deberes = deberes + 1;
    if(deberes %3 == 0){
        deberesCompiladores = deberesCompiladores + 1;
        console.log("# de deberes de compiladores",deberesCompiladores);
    }else{
        if(deberes %2 == 0){
            deberesAlgebra = deberesAlgebra + 1;
            console.log("# de deberes de algebra", deberesAlgebra);
        }else{
            if(deberes %2 !==0){
                deberesAnalisis = deberesAnalisis + 1;
                console.log("# de deberes de analisis", deberesAnalisis);
            }
        }
    }
} while(deberes<50)