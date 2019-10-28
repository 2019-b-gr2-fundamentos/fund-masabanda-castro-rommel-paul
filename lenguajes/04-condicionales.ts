// 04-condicionales.ts

const casado = true:
if (casado == true) {
    console.log("si estoy casado");
} else {
    console.log("no estoy casado");
}

if (casado == false) { //(expresion) => boolean
    console.log("si estoy casado");
} else {
    console.log("no estoy casado");
}

if (casado != true) {
    console.log("no estoy casado");
} else {
    console.log("si estoy casado");
}

if (casado != false) {
    console.log("si estoy casado");
} else {
    console.log("no estoy casado");
}

const tengoMosa = false;
const estaCasado = casado == true; // expresion
const soyMosero = tengoMosa == true
const casadoYMosero = casado == true && tengoMosa == true;

if (casadoYMosero){    
    console.log("casado y mosero");
}else{
    console.log("o casado o mosero o nada");
}


//AND-> &&
// true y true = true
// true y false = false
// false y true = false
// false y false = fasle 

// OR -> ||. -> pipes 
// true y true = true
// true y false = true
// false y true = true
// false y false = false

// apago la primera alarma me hago
// bolita y lloro hasta la segunda 
// alarma y me levanto 
// celularDescargado == true 
// amaneceMuerto == true 
// estaActivadaLaAlarma != true 
// estaEnModoSilencio == true 
// const seAtrasoAClase = celularDescargado == true ||
// const seAtrasoAClase = celularDescargado == true ||  amaneceMuerto == true && estaActivadaLaAlarma != true  || estaEnModoSilencio == true
//const seAtrasoAClase = celularDescargado ==true || amaneceMuerto  == true || estaActivadaLaAlarma != true|| estaActivadaLaAlarma != true || estaEnModoSilencio == true;