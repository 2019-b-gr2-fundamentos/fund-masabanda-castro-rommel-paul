function main() {
    var arregloEstudiantes = [
        { id: 1, nombre: "Rommel", nota: 7, nota20: 14 },
        { id: 2, nombre: "Paul", nota: 9 },
        { id: 3, nombre: "Wendy", nota: 4 },
        { id: 4, nombre: "Carolina", nota: 10 },
        { id: 5, nombre: "Carlos", nota: 6.5 },
    ];
    // operador FOR EACH nos ayuda a iterar
    // enviamos -> nada
    // recibimos -> nada
    var respuestaForEach = arregloEstudiantes
        .forEach(function (valorActual, indice, arreglo) {
        console.log(valorActual.nota);
        valorActual.nota20 = valorActual.nota * 2;
    });
    console.log(respuestaForEach); // UNDEFINED
    // Map -> transformarel arreglo o mutar
    // Enviamos -> valorActual modificado
    // Recibimos -> Nuevo arreglo con valores modificados
    var respuestaMap = arregloEstudiantes
        .map(function (valorActual, i, arreglo) {
        var nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota20: valorActual.nota * 2
        };
        return nuevoObjeto;
    });
    console.log('Respuesta Map', respuestaMap);
    console.log('arregloEstudiantes', arregloEstudiantes);
    //filter-> filtra el arreglo
    // enviamos -Z condicion
    // recibir -> nuevo arreglo con valores filtrados
    var respuestaFilter = arregloEstudiantes
        .filter(function (valorActual, i, arreglo) {
        var condicion7 = valorActual.nota > 7;
        var condicion5 = valorActual.nota < 5;
        return condicion7 || condicion5; // condicion es un truty            
    });
    console.log('respuestaFilter', respuestaFilter);
    console.log('arregloEstudiantes', arregloEstudiantes);
    // and -> every(todos cumplan) / or -> some (uno cumpla)
    // some -> algunos devuelve veradero o falso dependendiopndo de la condicion
    //( nota si alguno cunmple devuelve true, si ninguno cumple devuelve false)
    var respuestaSome = arregloEstudiantes
        .some(function (valorActual, i, arreglo) {
        var condicion = valorActual.nota < 1;
        // condicion truty o true
        return condicion;
    });
    console.log('respuestaSome', respuestaSome);
    console.log('arregloEstudinates', arregloEstudiantes);
    // every -> devuelve verdadero ofalso dependiendo la condicion
    // si todos cumplen la condicion TRue
    // si al menos uno falle devuelve False
    var respuestaEvery = arregloEstudiantes
        .every(function (valorActual) {
        var condicion = valorActual.nota >= 4;
        return condicion;
    });
    console.log('respuetaEvery', respuestaEvery);
    console.log('arregloEstudiantes', arregloEstudiantes);
    //Reduce -> devuelve un valor con un calculo aplicado
    // enviamos -> un calculo 
    // recibimps -> un valor
    var respuestaReduce = arregloEstudiantes
        .reduce(function (acumulador, valorActual) {
        var calculo = acumulador + valorActual.nota;
        return calculo;
    }, 0 // valor inical del acumulador
    );
    console.log('respuestaReduce', respuestaReduce);
    console.log('promedio', respuestaReduce / arregloEstudiantes.length);
    console.log('arregloEstudinates', arregloEstudiantes);
}
main();
