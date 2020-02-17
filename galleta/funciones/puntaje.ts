

export function score (){

    const x  = Math.floor(Math.random()*8+1);
    
    let y = 9-x;
    
    console.log("Sus puntaje son:");
    console.log("Jugador-1:",x);
    console.log("Jugador-2:",y);

    let respuesta = 1 ;

    if (x > y) {
        respuesta = 0;
    }
    if (respuesta) {
        console.log("Felicitaciones Jugador-2 --> GANASTE");
    }else{
        console.log("Felicitaciones Jugador-1 --> GANASTE");

    } 

    return respuesta;
};

