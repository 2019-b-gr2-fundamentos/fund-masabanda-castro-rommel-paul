"use strict";
exports.__esModule = true;
var fs = require("fs");
function leerArchivo(path) {
    var resultado = fs.readFileSync(path, //path
    'utf-8' //codificacion
    );
    console.log(resultado);
    return resultado;
}
exports.leerArchivo = leerArchivo;
