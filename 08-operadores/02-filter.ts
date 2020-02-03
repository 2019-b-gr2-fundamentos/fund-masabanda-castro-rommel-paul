export function filter(
    arreglo: any[],
    funcion: (valorActual:any, indice?:number, arreglo?:any[]) => boolean
):any[]{
    const arregloFiltrado = [];
    for(let i = 0; i < arreglo.length; i ++){
        const respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if(respuestaFuncion ==  true){
            arregloFiltrado.push(arreglo[i]);
        }
    }
    return arregloFiltrado;
}