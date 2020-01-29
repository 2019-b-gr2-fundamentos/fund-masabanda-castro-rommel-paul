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
var operacionA = prompt("Digite el numero de la operacion a realizar");
var operacionB = Number(operacionA);
if (operacionB >= 1 && operacionB <= 4) {
    var numA = prompt("Ingrese el primer valor");
    var numa = Number(numA);
    var numB = prompt("Ingrese el segundo valor");
    var numb = Number(numB);
    switch (operacionA) {
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
}
else {
    if (operacionB >= 5 && operacionB <= 5.01) {
        var numC = prompt("Ingrese el valor de A del trinomio de la forma Ax^2+Bx+C");
        var numc = Number(numC);
        var numD = prompt("Ingrese el valo de B de trinomiode la forma Ax^2+Bx+C");
        var numd = Number(numD);
        var numE = prompt("Ingrese el valor de C del trinomio de la forma Ax^2+Bx+C");
        var nume = Number(numE);
        var discriminante = numd * numd - 4 * numc * nume;
        console.log("Su discrminante es:", discriminante);
        if (discriminante > 0) {
            console.log("Si es factorizable, sus raices son Reales");
        }
        else {
            if (discriminante < 0) {
                console.log("No es factorizable, sus raices son Imaginarias");
            }
            else {
                console.log("valores incorrectos");
            }
        }
    }
}
