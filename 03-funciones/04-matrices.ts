function compararMatriz(
    matrizUno: number[][],
    matrizDos: number[][]
): boolean{
    return true;
}
 
function obtenerPrimeraDimension(matrizUno: number[][]): number | false{  // (): number | boolean | "no" | false | etc....
    
    // validacion
    const esValido = verificarTodosLosElementosSonArreglos(matrizUno);
    if (esValido){
        const primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo // devuelve esto ' el for devuelve el return'
    }else{
        return false; // devuelve falso
    }
    
}
 
function obtenerSegundaDimension(matrizUno: number[],[]): number{
    const esValido = verificarTodosLosElementosSonArreglos(matrizUno);
    let longitudActualMaxima = 0;
    let longitudActualMinima = -1;
    for(let i=0; i < matrizUno.length; i++);{
        const elementoActual = matrizUno[i];
        const longitudActual < elementoActual.length;
        if(longitudActualMaxima < longitudActual){
            longitudActualMaxima = longitudActual;
        }
        if(longitudActual < longitudActualMinima){
            longitudActualMinima = longitudActual
        }else(
            
        )
    }
    return
    
}
 
function verificarTodosLosElementosSonArreglos(arreglo: any[]): boolean{ // a donde se aplica(arreglo: any[]) any sig. cualquiercosa
    
    for(let i = 0; i< matrizUno.length; i++){
        // validacion
        const elementoActual = matrizUno[i];
        const esUnArreglo = typeof elementoActual == 'object' && 
        elementoActual.indexOf;  // verdadreo falso
 
        if(!esUnArreglo){
            return false; // devuelve -1 'este valor significa que no esta bien la dimension'
        } // return literalmente "no", solo false o cualquier cosa especifica
    }
    return true;
}
 
function main(){
 // compararMatriz()
}
