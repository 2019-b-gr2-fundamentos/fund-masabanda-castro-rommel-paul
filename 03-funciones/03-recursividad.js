//recursividad para repetir el codigo como un while o un for
function imrpimirMensajeNVeces(mensaje, numeroVeces) {
    if (numeroVeces == 0) {
        console.log("Se Termino");
    }
    else {
        console.log("hola");
        var nuevoNumeroVeces = numeroVeces - 1;
        imrpimirMensajeNVeces(mensaje, nuevoNumeroVeces);
    }
}
function main() {
    imrpimirMensajeNVeces("hola", 8);
}
main();
function detenerElArreglo() {
}
