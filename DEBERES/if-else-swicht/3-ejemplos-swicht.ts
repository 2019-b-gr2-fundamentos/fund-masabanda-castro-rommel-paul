// Se presentaran 3 ejemplos con swicht
//1)Segun tu signo del zodacio descubre tu elemento
const signo = prompt("Ingrese su signo del zodacio");
switch(signo){
    case"aries":
    case"leo":
    case"sagitario":
    console.log("la afinidad de tu signo del zodacio es con el fuego");
    break;
    case"tauro":
    case"virgo":
    case"capricornio":
    console.log("la afinidad de tu signo del zodacio es con la tierra");
    break;
    case"gemenis":
    case"libra":
    case"acuario":
    console.log("la afinidad de tu signo del zodacio es con el aire");
    break;
    case"cancer":
    case"escorpio":
    case"piscis":
    console.log("la afinidad de tu signo del zodacio es con el agua");
    break;
}

//3) Presupuesto para la chuma
const dineroA = prompt("Ingrese el presupuesto para la chuma");
const dinero = Number(dineroA);
switch(dineroA){
    case"0.50":
    console.log("Guarda no mas para el paseje");
    break;
    case"1":
    console.log("Guanchaca");
    break;
    case"2":
    console.log("Biela de litro");
    break;
    case"3":
    console.log("Switch");
    break;
    case"4":
    console.log("Jaguar, Zhumir, Ronponpon, Origen");
    break;
    case"6":
    console.log("Norteño");
    case"7":
    console.log("Caña manabita");
    break;
    case"14":
    console.log("Jaba de Brahma o Ron abuelo");
    case"23":
    console.log("Jhonny Walker rojo");
}

