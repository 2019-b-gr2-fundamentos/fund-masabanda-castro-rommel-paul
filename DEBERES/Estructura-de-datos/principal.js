"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompts = require("prompts");
var _02_leer_archivo_1 = require("./02-leer-archivo");
console.log("Binvenido");
console.log("Responda las siguientes preguntas");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function operaciones() {
            return __awaiter(this, void 0, void 0, function () {
                var operacionIngresada, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'number',
                                name: 'opcion',
                                message: 'Ingrese el numero de la operacion que desea realizar: \n1. Agregar un elemento \n2. Editar un elemento \n3. Eliminar un elemento \n 4. Buscar un elemento, \n 5. salir'
                            })];
                        case 1:
                            operacionIngresada = _b.sent();
                            return [4 /*yield*/, operacionIngresada];
                        case 2:
                            _b.sent();
                            _a = operacionIngresada.opcion;
                            switch (_a) {
                                case 1: return [3 /*break*/, 3];
                                case 2: return [3 /*break*/, 5];
                                case 3: return [3 /*break*/, 7];
                                case 4: return [3 /*break*/, 9];
                                case 5: return [3 /*break*/, 11];
                            }
                            return [3 /*break*/, 12];
                        case 3: return [4 /*yield*/, agrgarElementos()];
                        case 4:
                            _b.sent();
                            return [3 /*break*/, 13];
                        case 5: return [4 /*yield*/, editarElementos()];
                        case 6:
                            _b.sent();
                            return [3 /*break*/, 13];
                        case 7: return [4 /*yield*/, eliminarElemento()];
                        case 8:
                            _b.sent();
                            return [3 /*break*/, 13];
                        case 9: return [4 /*yield*/, buscarGas()];
                        case 10:
                            _b.sent();
                            return [3 /*break*/, 13];
                        case 11:
                            console.log("fin");
                            return [3 /*break*/, 13];
                        case 12: return [3 /*break*/, 13];
                        case 13: return [2 /*return*/];
                    }
                });
            });
        }
        function agrgarElementos() {
            return __awaiter(this, void 0, void 0, function () {
                var datoGases, respuesta;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts(propiedades)];
                        case 1:
                            datoGases = _a.sent();
                            respuesta = {
                                id: contador,
                                nombre: datoGases.nombre,
                                simbolo: datoGases.simbolo,
                                numeroAtomico: datoGases.numeroAtomico,
                                masaAtomica: datoGases.masaAtomica,
                                estadosDeOxidacion: datoGases.estadosDeOxidacion
                            };
                            arregloGases.push(respuesta);
                            console.log(arregloGases[contador - 1]);
                            contador = contador + 1;
                            return [4 /*yield*/, operaciones()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        function editarElementos() {
            return __awaiter(this, void 0, void 0, function () {
                var indice, indiceEncontrado, indiceActualizado, editado, respuestaEditada;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'number',
                                name: 'id',
                                message: 'ingrese el indice que desea editar'
                            })];
                        case 1:
                            indice = _a.sent();
                            indiceEncontrado = arregloGases.findIndex(function (valorActual, ind, arreglo) {
                                return valorActual.id == indice.id;
                            });
                            indiceActualizado = indiceEncontrado + 1;
                            return [4 /*yield*/, prompts(propiedades)];
                        case 2:
                            editado = _a.sent();
                            respuestaEditada = {
                                id: indiceActualizado,
                                nombre: editado.nombre,
                                simbolo: editado.simbolo,
                                numeroAtomico: editado.numeroAtomico,
                                masaAtomica: editado.masaAtomica,
                                estadosDeOxidacion: editado.estadosDeOxidacion,
                            };
                            arregloGases[indiceEncontrado] = respuestaEditada;
                            console.log(respuestaEditada);
                            return [4 /*yield*/, operaciones()];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        function eliminarElemento() {
            return __awaiter(this, void 0, void 0, function () {
                var Buscar, indiceEncontrado, Vacio;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log(arregloGases);
                            return [4 /*yield*/, prompts({
                                    type: 'number',
                                    name: 'id',
                                    message: 'ingresa el id del elemento que desea eliminar'
                                })];
                        case 1:
                            Buscar = _a.sent();
                            indiceEncontrado = arregloGases.findIndex(function (valorActual) {
                                return valorActual.id == Buscar.id;
                            });
                            Vacio = {
                                id: indiceEncontrado + 1,
                                nombre: '',
                                simbolo: '',
                                numeroAtomico: '',
                                masaAtomica: '',
                                estadosDeOxidacion: ''
                            };
                            if (indiceEncontrado != -1) {
                                arregloGases.splice(indiceEncontrado, 1, Vacio);
                                console.log(Vacio);
                            }
                            return [4 /*yield*/, operaciones()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        function buscarGas() {
            return __awaiter(this, void 0, void 0, function () {
                var buscarGasA, gasEncontrado;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'number',
                                name: 'nombre',
                                message: 'Puede buscar por ID '
                            })];
                        case 1:
                            buscarGasA = _a.sent();
                            gasEncontrado = arregloGases.find(function (valorActual) {
                                return valorActual.nombre == buscarGasA.nombre;
                            });
                            console.log(gasEncontrado);
                            return [4 /*yield*/, operaciones()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        }
        var arregloGases, contador, propiedades;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    arregloGases = [JSON.parse(_02_leer_archivo_1.leerArchivo('./ejemplo.txt'))];
                    contador = 1;
                    propiedades = [
                        {
                            type: 'text',
                            name: 'nombre',
                            message: 'Ingrese el nombre del elemento'
                        },
                        {
                            type: 'text',
                            name: 'simbolo',
                            message: 'Ingrese el simbolo del elemento'
                        },
                        {
                            type: 'number',
                            name: 'numeroAtomico',
                            message: 'Ingrese el numero atomica del elemento'
                        },
                        {
                            type: 'number',
                            name: 'masaAtomica',
                            message: 'Ingrese la masa atomica del elemento'
                        },
                        {
                            type: 'number',
                            name: 'estadosDeOxidacion',
                            message: 'Ingrese un estado de oxidacion del elemento'
                        }
                    ];
                    return [4 /*yield*/, agrgarElementos()];
                case 1:
                    _a.sent();
                    ;
                    operaciones();
                    return [2 /*return*/];
            }
        });
    });
}
main().then().catch();
