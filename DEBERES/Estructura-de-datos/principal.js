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
console.log("Binvenido");
console.log("Responda las siguientes preguntas");
function elementos() {
    return __awaiter(this, void 0, void 0, function () {
        function agrgarElementos() {
            return __awaiter(this, void 0, void 0, function () {
                var registroElementos;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts(propiedades)];
                        case 1:
                            registroElementos = _a.sent();
                            arregloGases.push(registroElementos);
                            opciones();
                            return [4 /*yield*/, agrgarElementos];
                        case 2:
                            _a.sent();
                            console.log(arregloGases);
                            return [2 /*return*/];
                    }
                });
            });
        }
        function editarElementos() {
            return __awaiter(this, void 0, void 0, function () {
                var indice, propiedadEditar, valorNuevo, elementoElegido;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'number',
                                name: 'indice',
                                message: 'ingrese el indice del la propiedad que desea editar'
                            })];
                        case 1:
                            indice = _a.sent();
                            if (!(indice.indice < arregloGases.length)) return [3 /*break*/, 7];
                            return [4 /*yield*/, prompts({
                                    type: 'text',
                                    name: 'propiedad',
                                    message: 'que desea editar'
                                })];
                        case 2:
                            propiedadEditar = _a.sent();
                            if (!(propiedadEditar.propiedad == 'numeroAtomico'
                                || propiedadEditar.propiedad == 'simbolo'
                                || propiedadEditar.propiedad == 'masaAtomica'
                                || propiedadEditar.propiedad == 'electronegatividad'
                                || propiedadEditar.propiedad == 'estadosDeOxidacion')) return [3 /*break*/, 5];
                            return [4 /*yield*/, prompts({
                                    type: 'text',
                                    name: 'valor',
                                    message: 'Ingrese la nueva informacion'
                                })];
                        case 3:
                            valorNuevo = _a.sent();
                            elementoElegido = arregloGases[indice.indice];
                            switch (propiedadEditar.propiedad) {
                                case 'numeroAtomico':
                                    elementoElegido.numeroAtomico = valorNuevo.valor;
                                    break;
                                case 'simbolo':
                                    elementoElegido.simbolo = valorNuevo.valor;
                                    break;
                                case 'masaAtomica':
                                    elementoElegido.masaAtomica = valorNuevo.valor;
                                    break;
                                case 'electronegatividad':
                                    elementoElegido.electronegatividad = valorNuevo.valor;
                                    break;
                                case 'estadosDeOxidacion':
                                    elementoElegido.estadosDeOxidacion = valorNuevo.valor;
                                    break;
                            }
                            opciones();
                            return [4 /*yield*/, editarElementos];
                        case 4:
                            _a.sent();
                            console.log(arregloGases);
                            return [3 /*break*/, 6];
                        case 5:
                            console.log("debe ingresar el nombre correctamente");
                            editarElementos();
                            _a.label = 6;
                        case 6: return [3 /*break*/, 8];
                        case 7:
                            console.log('el indice ingresado es erroneo');
                            editarElementos();
                            _a.label = 8;
                        case 8: return [2 /*return*/];
                    }
                });
            });
        }
        function opciones() {
            return __awaiter(this, void 0, void 0, function () {
                var opciones;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, prompts({
                                type: 'text',
                                name: 'eleccion',
                                message: 'digite le numero de la operacion que desea realizar \n 1. agregar un elemento \n 2. editar un elemento \n 3. salir'
                            })];
                        case 1:
                            opciones = _a.sent();
                            return [4 /*yield*/, opciones];
                        case 2:
                            _a.sent();
                            switch (opciones.eleccion) {
                                case '1':
                                    agrgarElementos();
                                    break;
                                case '2':
                                    editarElementos();
                                    break;
                                case '3':
                                    console.log(agrgarElementos);
                                    break;
                                default:
                                    console.log("su ingreso es incorrecto");
                                    opciones();
                                    break;
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }
        var arregloGases, propiedades;
        return __generator(this, function (_a) {
            arregloGases = [];
            propiedades = [
                {
                    type: 'number',
                    name: 'numeroAtomico',
                    message: 'Ingrese el numero atomico del elemento'
                },
                {
                    type: 'text',
                    name: 'simbolo',
                    message: 'Ingrese el simbolo del elemento'
                },
                {
                    type: 'number',
                    name: 'masaAtomica',
                    message: 'Ingrese la masa atomica del elemento'
                },
                {
                    type: 'number',
                    name: 'estadosDeOxidacion',
                    message: 'Ingrese el estado de oxidacion del elemento'
                },
                {
                    type: 'number',
                    name: 'electronegatividad',
                    message: 'Ingrese la electronegatividad del elemento'
                }
            ];
            ;
            agrgarElementos();
            return [2 /*return*/];
        });
    });
}
elementos();
