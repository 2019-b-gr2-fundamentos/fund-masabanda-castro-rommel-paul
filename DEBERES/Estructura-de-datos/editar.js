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
var new_1 = require("./new");
var leer_1 = require("./leer");
var prompts = require("prompts");
var escribir_1 = require("./escribir");
function editar() {
    return __awaiter(this, void 0, void 0, function () {
        var archivoleido, archivoCargado, archivoConEstructura, idBuscar, idModificar, newNombre, newTipo, newNivel, newEdad, newestado, arregloFinal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    archivoleido = leer_1.leer('./arreglo.txt');
                    archivoCargado = JSON.parse(archivoleido);
                    archivoConEstructura = archivoCargado;
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'id',
                            message: 'Ingresa el ID del pokemon que desea editar'
                        })];
                case 1:
                    idBuscar = _a.sent();
                    idModificar = archivoConEstructura.findIndex(function (valorActual, indice, arreglo) {
                        return valorActual.id == idBuscar.id;
                    });
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'nombre',
                            message: 'Ingresa el nombre del elemento'
                        })];
                case 2:
                    newNombre = _a.sent();
                    archivoConEstructura[idModificar].nombre = newNombre;
                    return [4 /*yield*/, prompts({
                            type: 'text',
                            name: 'simbolo',
                            message: 'Ingresa el simbolo del elemento'
                        })];
                case 3:
                    newTipo = _a.sent();
                    archivoConEstructura[idModificar].simbolo = newTipo;
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'numeroAtomico',
                            message: 'Ingresa el numero atomico del elemento'
                        })];
                case 4:
                    newNivel = _a.sent();
                    archivoConEstructura[idModificar].numeroAtomico = newNivel;
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'masaAtomica',
                            message: 'Ingresa la masa atomica del elemento'
                        })];
                case 5:
                    newEdad = _a.sent();
                    archivoConEstructura[idModificar].masaAtomica = newEdad;
                    archivoConEstructura[idModificar].numeroAtomico = newNivel;
                    return [4 /*yield*/, prompts({
                            type: 'number',
                            name: 'estadoOxidacion',
                            message: 'Ingrese el estado de oxidacion del elemento'
                        })];
                case 6:
                    newestado = _a.sent();
                    archivoConEstructura[idModificar].estadosDeOxidacion = newestado;
                    arregloFinal = JSON.stringify(archivoConEstructura);
                    escribir_1.escribir('./arreglo.txt', arregloFinal);
                    new_1.pokedex();
                    return [2 /*return*/];
            }
        });
    });
}
exports.editar = editar;