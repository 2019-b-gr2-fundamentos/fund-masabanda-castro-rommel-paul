//recursividad para repetir el codigo como un while o un for
function imrpimirMensajeNVeces(
    mensaje: string,
    numeroVeces: number,
): void{
    if(numeroVeces == 0){
        console.log(`Se Termino`);
    }else{
        console.log(`hola`);
        const nuevoNumeroVeces = numeroVeces -1;
        imrpimirMensajeNVeces(mensaje, nuevoNumeroVeces);
    }
}
function main(){
    imrpimirMensajeNVeces (`hola`,8);
}

function detenerElArreglo(){

}
/* PSEUDOCODIGO
1) Dado un conjunto de numeros(arreglo)
2) Imprimir cada elemento del conjunto(arreglo) 
*/

function arregloDeNumeros(){
    const elementos = [];
    elementos
}


//para que sea un arreglo de multiples dimensiones sus elementos deben ser arreglos




