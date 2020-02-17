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
var nombre_1 = require("./funciones/nombre");
var jugador1_1 = require("./funciones/jugador1");
var jugador2_1 = require("./funciones/jugador2");
var dibujarTrazo_1 = require("./funciones/dibujarTrazo");
var puntaje_1 = require("./funciones/puntaje");
var leerLogo_1 = require("./funciones/leerLogo");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var archivo, nombre1, nombre11, nombre2, nombre22, arregloMovimientosTotales, a, b, arregloCambiadoB, c, arregloCambiadoC, d, arregloCambiadoD, e, arregloCambiadoE, f, arregloCambiadoF, g, arregloCambiadoG, h, arregloCambiadoH, i, arregloCambiadoI, j, arregloCambiadoJ, k, arregloCambiadoK, l, arregloCambiadoL, m, arregloCambiadoM, n, arregloCambiadoN, o, arregloCambiadoO, p, arregloCambiadoP, q, arregloCambiadoQ, r, arregloCambiadoR, s, arregloCambiadoS, t, arregloCambiadoT, u, arregloCambiadoU, v, arregloCambiadoV, w, arregloCambiadoW, x, arregloCambiadoX, archivoFin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    archivo = leerLogo_1.leer('./logo.txt');
                    console.log(archivo);
                    return [4 /*yield*/, nombre_1.Bienvenida()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, nombre_1.Name1()];
                case 2:
                    nombre1 = _a.sent();
                    nombre11 = ("Jugador-1");
                    console.log(nombre1);
                    return [4 /*yield*/, nombre_1.Name2()];
                case 3:
                    nombre2 = _a.sent();
                    nombre22 = ("Jugador-2");
                    console.log(nombre2);
                    arregloMovimientosTotales = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre11);
                    return [4 /*yield*/, jugador1_1.jugador1()];
                case 4:
                    a = _a.sent();
                    arregloMovimientosTotales.splice(a - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(a);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre22);
                    return [4 /*yield*/, jugador2_1.jugador2()];
                case 5:
                    b = _a.sent();
                    arregloMovimientosTotales.splice(b - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(b);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoB = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre11);
                    return [4 /*yield*/, jugador1_1.jugador1()];
                case 6:
                    c = _a.sent();
                    arregloMovimientosTotales.splice(c - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(c);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoC = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre22);
                    return [4 /*yield*/, jugador2_1.jugador2()];
                case 7:
                    d = _a.sent();
                    arregloMovimientosTotales.splice(d - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(d);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoD = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre11);
                    return [4 /*yield*/, jugador1_1.jugador1()];
                case 8:
                    e = _a.sent();
                    arregloMovimientosTotales.splice(e - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(e);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoE = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre22);
                    return [4 /*yield*/, jugador2_1.jugador2()];
                case 9:
                    f = _a.sent();
                    arregloMovimientosTotales.splice(f - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(f);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoF = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre11);
                    return [4 /*yield*/, jugador1_1.jugador1()];
                case 10:
                    g = _a.sent();
                    arregloMovimientosTotales.splice(g - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(g);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoG = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre22);
                    return [4 /*yield*/, jugador2_1.jugador2()];
                case 11:
                    h = _a.sent();
                    arregloMovimientosTotales.splice(h - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(h);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoH = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre11);
                    return [4 /*yield*/, jugador1_1.jugador1()];
                case 12:
                    i = _a.sent();
                    arregloMovimientosTotales.splice(i - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(i);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoI = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre22);
                    return [4 /*yield*/, jugador2_1.jugador2()];
                case 13:
                    j = _a.sent();
                    arregloMovimientosTotales.splice(j - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(j);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoJ = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre11);
                    return [4 /*yield*/, jugador1_1.jugador1()];
                case 14:
                    k = _a.sent();
                    arregloMovimientosTotales.splice(k - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(k);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoK = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre22);
                    return [4 /*yield*/, jugador2_1.jugador2()];
                case 15:
                    l = _a.sent();
                    arregloMovimientosTotales.splice(l - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(l);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoL = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre11);
                    return [4 /*yield*/, jugador1_1.jugador1()];
                case 16:
                    m = _a.sent();
                    arregloMovimientosTotales.splice(m - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(m);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoM = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre22);
                    return [4 /*yield*/, jugador2_1.jugador2()];
                case 17:
                    n = _a.sent();
                    arregloMovimientosTotales.splice(n - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(n);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoN = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre11);
                    return [4 /*yield*/, jugador1_1.jugador1()];
                case 18:
                    o = _a.sent();
                    arregloMovimientosTotales.splice(o - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(o);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoO = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre22);
                    return [4 /*yield*/, jugador2_1.jugador2()];
                case 19:
                    p = _a.sent();
                    arregloMovimientosTotales.splice(p - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(p);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoP = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre11);
                    return [4 /*yield*/, jugador1_1.jugador1()];
                case 20:
                    q = _a.sent();
                    arregloMovimientosTotales.splice(q - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(q);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoQ = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre22);
                    return [4 /*yield*/, jugador2_1.jugador2()];
                case 21:
                    r = _a.sent();
                    arregloMovimientosTotales.splice(r - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(r);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoR = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre11);
                    return [4 /*yield*/, jugador1_1.jugador1()];
                case 22:
                    s = _a.sent();
                    arregloMovimientosTotales.splice(s - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(s);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoS = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre22);
                    return [4 /*yield*/, jugador2_1.jugador2()];
                case 23:
                    t = _a.sent();
                    arregloMovimientosTotales.splice(t - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(t);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoT = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre11);
                    return [4 /*yield*/, jugador1_1.jugador1()];
                case 24:
                    u = _a.sent();
                    arregloMovimientosTotales.splice(u - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(u);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoU = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre22);
                    return [4 /*yield*/, jugador2_1.jugador2()];
                case 25:
                    v = _a.sent();
                    arregloMovimientosTotales.splice(v - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(v);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoV = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre11);
                    return [4 /*yield*/, jugador1_1.jugador1()];
                case 26:
                    w = _a.sent();
                    arregloMovimientosTotales.splice(w - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(w);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoW = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////////////////////");
                    console.log("Es el turno de:", nombre22);
                    return [4 /*yield*/, jugador2_1.jugador2()];
                case 27:
                    x = _a.sent();
                    arregloMovimientosTotales.splice(x - 1, 1, 0);
                    dibujarTrazo_1.generarLinea(x);
                    console.log("Movimientos disponibles:", arregloMovimientosTotales);
                    arregloCambiadoX = arregloMovimientosTotales;
                    console.log("///////////////////////////////////////////////////////////////////////////");
                    puntaje_1.score();
                    console.log("///////////////////////////////////////////////////////////////////////////");
                    archivoFin = leerLogo_1.leer('./logoGameOver.txt');
                    console.log(archivoFin);
                    return [2 /*return*/];
            }
        });
    });
}
main();
