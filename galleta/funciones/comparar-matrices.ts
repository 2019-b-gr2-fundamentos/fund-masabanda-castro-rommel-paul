export async function comparar(matrizUno: number[][], matrizDos: number[][]) {
 

    let soniguales =1;

        for (let i = 0; i < 8; i ++){
            for(let j = 0; j < 2 ; j++){
            
                let valorMatriz1 = matrizUno[i][j];
                let valorMatriz2 = matrizDos[i][j];

                if (valorMatriz1 != valorMatriz2) {
                    soniguales = 0;
                }         
            }
        }

        if(soniguales){
            console.log("son iguales");
        }else{
            console.log("son diferentes");
        }

        return soniguales

}


const matriz1 = [
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1],
]
const matriz2 = [
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1],
]

compararMatriz(matriz1, matriz2)
    
/*        }
        for (var f =0; f< matriz2.length; f++){
            for(var c = 0; j< matriz2[0].length; c++)
            {
                matriz2[f][c] = contB;
                contB ++;   
            }
        }
    }
    if (matriz1[i][j] == matriz2[f][c]) {

        console.log("iguales");
    } else {
        console.log("diferentes");                        
    }
*/
//}

//let funciona = compararMatriz(matriz1, matriz2);
//console.log(funciona);