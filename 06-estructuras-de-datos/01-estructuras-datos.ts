// boolean
// string
//null -> object
//number
//PERSONA
//ANIMAL
//CASI EN TODOS LOS LENGuAJES SE UTILIZA UNa
//Struct->Estructura de datos
//Clase-> estructura de datos ->metodos
/*const edadA = 20;
const poliPerroA ={
    nombreCientifico: 'canis lupus familiaris',
    "llave":"valor",
    noEsNecesario: true, //ultima coma ok
    enojo: undefined,
    edadActual: edadA, //variables
*/    
// estructura de datos en lenguajes NO TIPADO
import {AnimalPerrito} from './interfaces/animal-perrito.interface'//cuando no tiene (./) va a buscar en node modules ->dependencias
import {Duenio} from './interfaces/duenio.interface'
const poliPerro ={
    nombreCientifico: 'canis lupus familiaris',
    nombre: 'grandote',
    clan: 'poliperro',
    edad: 10,
    hijos: null,
    perritas: ['Manuela', 'Zoraida'],
    vacunado: true,
}
console.log(poliPerro.nombre); //grandote

//estructura de datos en lenguajes tipados(su codigo es mas estricto)




const poliPerroAmarillo: AnimalPerrito = {
    nombreCientifico: 'canis lupus familiaris',
    nombre: 'Amarillo',
    clan: null, // a cualquier propiedad de la Struct se puede poner null
    edad: 4,
    //hijos: null,
    perritas: [],
    vacunado: false,
}
const duenioPoliPerroAmarillo: Duenio = {
    nombres: 'Rommel',
    apellidos: 'Masabanda',
    fechaNacimineto: 2/16/18,
    mascotasPerros: [poliPerroAmarillo],
}
//guardar datos en la estructura
poliPerroAmarillo.duenio = duenioPoliPerroAmarillo;
poliPerroAmarillo.edad = 4;
poliPerroAmarillo.vacunado = true;

// acceder a los datos
console.log(poliPerroAmarillo.duenio.nombres);
console.log(poliPerroAmarillo.duenio.apellidos);
console.log(poliPerroAmarillo.nombre);
console.log(poliPerroAmarillo.edad);




