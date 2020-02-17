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
var prompts = require("../node_modules/prompts");
function Name1() {
    return __awaiter(this, void 0, void 0, function () {
        var nombres, respuestaNombre;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nombres = [
                        {
                            type: 'text',
                            name: 'jugadorUno',
                            message: 'Ingrese el nombre del primer jugador'
                        }
                    ];
                    return [4 /*yield*/, prompts(nombres)];
                case 1:
                    respuestaNombre = _a.sent();
                    return [2 /*return*/, respuestaNombre.nombreJugadorUno];
            }
        });
    });
}
exports.Name1 = Name1;
;
function Name2() {
    return __awaiter(this, void 0, void 0, function () {
        var nombres, respuestaNombre;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    nombres = [
                        {
                            type: 'text',
                            name: 'jugadorDos',
                            message: 'Ingrese el nombre del segundo jugador'
                        }
                    ];
                    return [4 /*yield*/, prompts(nombres)];
                case 1:
                    respuestaNombre = _a.sent();
                    return [2 /*return*/, respuestaNombre.nombreJugadorDos];
            }
        });
    });
}
exports.Name2 = Name2;
;
function Bienvenida() {
    console.log(".:Bienvenidos al juego de la Galletita:.\n");
    console.log('NOTA !!!!!');
    console.log('Debe ingresar el numero de la linea que desea trazar');
    console.log('Tablero\n');
    console.log("|----1----|----2----|----3----|");
    console.log("|         |         |         |");
    console.log("4         5         6         7");
    console.log("|         |         |         |");
    console.log("|----8----|----9----|----10---|");
    console.log("|         |         |         |");
    console.log("11        12        13        14");
    console.log("|         |         |         |");
    console.log("|----15---|----16---|----17---|");
    console.log("|         |         |         |");
    console.log("18        19        20        21");
    console.log("|         |         |         |");
    console.log("|----22---|----23---|----24---|");
}
exports.Bienvenida = Bienvenida;
;
function Ordenar() {
    return __awaiter(this, void 0, void 0, function () {
        var i, x, j, y, f, c, menor, matriz;
        return __generator(this, function (_a) {
            f = 2;
            c = 2;
            matriz = [
                [1, 2],
                [3, 5]
            ];
            for (i = 0; i > f; i++) {
                for (j = 0; j > c; j++) {
                    for (x = 0; x > f; x++) {
                        for (y = 0; y > c; y++) {
                            if (matriz[i][j] < matriz[x][y]) {
                                menor = matriz[i][j];
                                matriz[i][j] = matriz[x][y];
                                matriz[x][y] = menor;
                            }
                        }
                    }
                }
            }
            // imprimir
            for (i = 0; i < f; i++) {
                for (j = 0; j < c; j++) {
                    console.log(matriz[i][j]);
                }
            }
            return [2 /*return*/];
        });
    });
}
exports.Ordenar = Ordenar;
console.log(".:Bienvenidos al juego de la Galletita:.\n");
//Name().then().catch();
//Ordenar();
