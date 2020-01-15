"use strict";
exports.__esModule = true;
// 02-crud.ts create read update delete
//const prompts = requiere('prompts');
var prompts = require("prompts");
function main() {
    obtenerDatosAnimalPerrito();
}
function obtenerDatosAnimalPerrito() {
    //paradigma de programacion
    //sincrono vs asincrono
    console.log('inicio');
    var promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'puedes darme tu edad'
    });
    console.log(promesaEdad);
    promesaEdad
        .then(// ok
    function (datos) {
        console.log('datos', datos); //aqui puedo seguir
        var promesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: 'puedes darme tu nombre'
        });
        console.log(promesaNombre);
        promesaNombre
            .then(// ok
        function (datos) {
            console.log('Nombre', datos); //aqui puedo seguir
        })["catch"](// =(
        function (error) {
            console.log('error', error);
        });
    })["catch"](// =(
    function (error) {
        console.log('error', error);
    });
    console.log('fin');
}
main();
/*
hay funciones q devuelven promesas (se puede o no cunmplir)


*/ 
