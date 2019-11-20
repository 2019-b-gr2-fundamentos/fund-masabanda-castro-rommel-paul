let edad = 30;       // let variable mutables puede cambiar de valor
if( edad>18){
    console.log("legal");
    console.log(edad); //30
}else{
    console.log("7 años de carcel");
}                            


if(true){//bloque1
    let edad = 30;
    console.log(edad);
    if(edad){//bloque2
        console.log(edad);
        if(edad){//bloque3
            console.log(edad);
    }else{// bloque 4
        console.log(edad);
    }
}else{//bloque5
    console.log(edad);
}
}else{

}

let arreglofloron =[0,0,0,1,0]
let existeFloron = false;
for(let i=0; i<5; i++){
    if(arreglofloron[i] == 1){
        existeFloron = true;
    }
}
if(existeFloron){
    console.log("adivinar");
    }else{
        console.log("asignar ylurgo adivinar")
    
}