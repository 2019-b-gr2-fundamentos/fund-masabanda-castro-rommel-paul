"use strict";
exports.__esModule = true;
var fs = require("fs");
function escribirArchivo(contenido) {
    fs.writeFileSync('./ejemplo.txt', //path
    'NUEVO CONTENIDO :D' + contenido, 'utf8');
}
exports.escribirArchivo = escribirArchivo;
