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

//tryty
const nombreVacio ="";
if(""){
    console.log("truty");
}else{
    console.log("falsy");
}

if("ad"){
    console.log("truty");
}else{
    console.log("falsy");
}

if(123){
    console.log("truty");
}else{
    console.log("falsy");
}

if(0){
    console.log("truty");
}else{
    console.log("falsy");
}

if(undefined){              // falsy
    console.log("truty");
}else{
    console.log("falsy");
}

const calculo = "sumar"; // sumar, restar, multiplicar, dividir
switch(calculo){
    case "sumar";           //1
    break;
    //codigo
    case "restar";          //2   
    break;
    //codigo
    case "multiplicar";     //3  
    break;
    //codigo
    case "dividir";         //4
    break;
    //codigo
    default;
}

// 6 Guagua
// 18 Guambra
// 65 Longo
// 66 Ruku
// no vale con switch ya que toma valores designados no un rango de valores 



const edadString = prompt ("ingrese una edad");
const edad = Number (edadString);
if(edad >=0 && edad <=6){
    console.log("Guagua");
}else{
    if(edad >=7 && edad <=18){
        console.log("Guambra");
    }else{
        if(edad >=19 && edad <= 65){
            console.log("Longo");
        }else{
            if(edad >=66 && edad <=140){
                console.log("Ruku");
            }else{
                console.log("Ingrese una edad real");
            }
        }   
    }
}






