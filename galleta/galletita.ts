
import { Bienvenida, Name1, Name2} from "./funciones/nombre";
import { jugador1 } from "./funciones/jugador1";
import { jugador2 } from "./funciones/jugador2";
import { generarLinea } from "./funciones/dibujarTrazo";
import { score } from "./funciones/puntaje";
import { leer } from "./funciones/leerLogo";

async function main(){
    const archivo = leer('./logo.txt');
    console.log(archivo);
    await Bienvenida();

    
    let nombre1 = await Name1();
    let nombre11 = ("Jugador-1");
    console.log(nombre1);

    let nombre2 = await Name2();
    let nombre22 = ("Jugador-2");
    console.log(nombre2);

    let arregloMovimientosTotales = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
    console.log("Movimientos disponibles:", arregloMovimientosTotales);

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre11);
    let a = await jugador1();
    
    arregloMovimientosTotales.splice(a-1,1,0);
    generarLinea(a);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre22);

    let b = await jugador2();

    arregloMovimientosTotales.splice(b-1,1,0);
    generarLinea(b);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoB = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre11);
    
    let c = await jugador1();
    
    arregloMovimientosTotales.splice(c-1,1,0);
    generarLinea(c);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoC = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre22);
    let d = await jugador2();

    arregloMovimientosTotales.splice(d-1,1,0);
    generarLinea(d);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoD = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre11);
    let e = await jugador1();
    
    arregloMovimientosTotales.splice(e-1,1,0);
    generarLinea(e);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoE = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre22);

    let f = await jugador2();

    arregloMovimientosTotales.splice(f-1,1,0);
    generarLinea(f);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoF = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre11);
    let g = await jugador1();
    
    arregloMovimientosTotales.splice(g-1,1,0);
    generarLinea(g);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoG = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre22);

    let h = await jugador2();

    arregloMovimientosTotales.splice(h-1,1,0);
    generarLinea(h);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoH = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre11);
    let i = await jugador1();
    
    arregloMovimientosTotales.splice(i-1,1,0);
    generarLinea(i);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoI = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre22);

    let j = await jugador2();

    arregloMovimientosTotales.splice(j-1,1,0);
    generarLinea(j);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoJ = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre11);
    let k = await jugador1();
    
    arregloMovimientosTotales.splice(k-1,1,0);
    generarLinea(k);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoK = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre22);

    let l = await jugador2();

    arregloMovimientosTotales.splice(l-1,1,0);
    generarLinea(l);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoL = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre11);
    let m = await jugador1();
    
    arregloMovimientosTotales.splice(m-1,1,0);
    generarLinea(m);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoM = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre22);

    let n = await jugador2();

    arregloMovimientosTotales.splice(n-1,1,0);
    generarLinea(n);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoN = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre11);
    let o = await jugador1();
    
    arregloMovimientosTotales.splice(o-1,1,0);
    generarLinea(o);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoO = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre22);

    let p = await jugador2();

    arregloMovimientosTotales.splice(p-1,1,0);
    generarLinea(p);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoP = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre11);
    let q = await jugador1();
    
    arregloMovimientosTotales.splice(q-1,1,0);
    generarLinea(q);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoQ = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre22);

    let r = await jugador2();

    arregloMovimientosTotales.splice(r-1,1,0);
    generarLinea(r);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoR = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre11);
    let s = await jugador1();
    
    arregloMovimientosTotales.splice(s-1,1,0);
    generarLinea(s);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoS = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre22);

    let t = await jugador2();

    arregloMovimientosTotales.splice(t-1,1,0);
    generarLinea(t);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoT = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 
    
    console.log("Es el turno de:", nombre11);
    let u = await jugador1();
    
    arregloMovimientosTotales.splice(u-1,1,0);
    generarLinea(u);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoU = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre22);

    let v = await jugador2();

    arregloMovimientosTotales.splice(v-1,1,0);
    generarLinea(v);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoV = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 
    
    console.log("Es el turno de:", nombre11);
    let w = await jugador1();
    
    arregloMovimientosTotales.splice(w-1,1,0);
    generarLinea(w);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoW = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////////////////////"); 

    console.log("Es el turno de:", nombre22);

    let x = await jugador2();

    arregloMovimientosTotales.splice(x-1,1,0);
    generarLinea(x);
    console.log("Movimientos disponibles:",arregloMovimientosTotales);
    
    let arregloCambiadoX = arregloMovimientosTotales

    console.log("///////////////////////////////////////////////////////////////////////////");
    score();    
    console.log("///////////////////////////////////////////////////////////////////////////");

    const archivoFin = leer('./logoGameOver.txt');
    console.log(archivoFin);
    
}
main();
