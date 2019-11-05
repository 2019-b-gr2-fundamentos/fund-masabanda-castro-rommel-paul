//Calculadora que realiza operaciones basicas y determina el area de un circulo.
const numeroA = prompt ("Digite el primer valor o radio del circulo");
const numeroa = Number (numeroA);
const operacion = prompt ("Eliga la operacion 1=suma, 2=resta, 3=multiplicacion, 4=division, 5=area del circulo");
const numeroB = prompt ("Digite el segundo valor, o pi=3.1416 para el area del circulo");
const numerob = Number (numeroB);

switch(operacion){

case "1":
    console.log(numeroa + numerob);
break;

case "2":
    console.log(numeroa - numerob);
break;

case "3":
    console.log(numeroa * numerob);
break;

case "4":
    console.log(numeroa / numerob);
break;

case"5":
    console.log( numeroa * numeroa * numerob);
break;

default:
    console.log("Elija un numero de operacion correcto");
}