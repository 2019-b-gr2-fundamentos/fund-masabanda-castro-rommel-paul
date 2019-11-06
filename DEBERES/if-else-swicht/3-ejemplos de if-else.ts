// 3 Ejmplos de If and else
//1---->Detector de numeros pares e impares.
const mensaje = prompt("Digite un numero");
const num = Number(mensaje);
if(num % 2 ){
    console.log(num, "es un numero impar");
}else{
    console.log(num, "es un numero par");
}
//2----->deteminar si el numero ingresado es positivo negativo o cero 
const numeroA = prompt("Digite un numero");
const numero = Number(numeroA);
if(numero >0){
    console.log(numero,"es positivo");
}else{
    if(numero ==0){
        console.log("su numero es el cero");    
    }else{
        if(numero <0){
        console.log(numero,"es negativo");
        }else{
            console.log("Ese no es un numero");
        }
    }
}
//3------>Porcentaje de licor en la sangre (g/l) y su efecto a la hora de conducir.
const alcoholA = prompt("Porcentaje de alcohol en la sangre en (g/l)");
const alcohol = Number(alcoholA);
if(alcohol >=0 && alcohol <=0.2){
    console.log("Nivel bajo");
    console.log("No hay sintomas significativos");
}else{
    if(alcohol>=0.3 && alcohol<=0.5){
    console.log("Nivel medio");
    console.log("Concudir empieza a ser peligroso");
    }else{
        if(alcohol>=0.6 && alcohol<=1){
            console.log("Nivel alto");
            console.log("La coordinacion se ve muy afectada");
        }else{
            if(alcohol>=1.1 && alcohol<=1.5){
                console.log("Muy alto");
                console.log("Reflejos alterados y reaccion lenta e imprecisa");
            }else{
                if(alcohol>=1.6 && alcohol<=4){
                console.log("Extremo");
                console.log("Perdida de conciencia, riesgo de muerte");
                }else{
                    if(alcohol>=6 && alcohol<=25){
                        console.log("Preparate para saludar a Diosito");
                    }
                }
            }
        }
    }
}