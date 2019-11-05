// La calculadora determinara si un trinomio de la forma ax^2+bx+c es factorizable.
// Por medio del discriminante, es decir cuando:
// Discriminante > 0 posee raices Reales.
// Discriminiate < 0 no posee raices Reales si no imaginarias.

console.log("Escoja la operacios a realizar");
console.log("1=suma");
console.log("2=resta");
console.log("3=multiplicacion");
console.log("4=division");
console.log("5=discriminate de un trinomio");

const operacionA = prompt("Digite el numero de la operacion a realizar");
const operacionB = Number (operacionA);
if( operacionB >=1 && operacionB <=4){
    const numA = prompt("Ingrese el primer valor");
    const numa = Number(numA);
    const numB = prompt("Ingrese el segundo valor");
    const numb = Number(numB);
    switch(operacionA){
        case "1":
            console.log(numa + numb);
            break;
        case "2":
            console.log(numa - numb);
            break;
        case "3":
            console.log(numa * numb);
            break;
        case "4":
            console.log(numa / numb);
            break;
    }
}else{
    if(operacionB >= 5 && operacionB <=5.01){
    const numC = prompt("Ingrese el valor de A del trinomio de la forma Ax^2+Bx+C");
    const numc = Number(numC);
    const numD = prompt("Ingrese el valo de B de trinomiode la forma Ax^2+Bx+C");
    const numd = Number(numD);
    const numE = prompt("Ingrese el valor de C del trinomio de la forma Ax^2+Bx+C");
    const nume = Number(numE);
    const discriminante = numd * numd - 4 * numc * nume; 
    console.log("Su discrminante es:", discriminante);
    if(discriminante >0){
        console.log("Si es factorizable, sus raices son Reales");
    }else{
        if(discriminante <0){
            console.log("No es factorizable, sus raices son Imaginarias");
        }else{
                console.log("valores incorrectos");
            }   
        }
    }
}





