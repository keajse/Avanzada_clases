const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

console.log(argv);

let nombre = argv.nombre;
let edad = argv.edad;
let estatura = argv.estatura;


//clasificar padawan

/*function crearAprendiz(nombre, edad,estatura){
    console.log(nombre);
    console.log(edad);
    console.log(estatura);
}

// opción uno  crearAprendiz("luke", 18, 1.80);

crearAprendiz(nombre, edad, estatura);*/

function crearAprendiz(nombre, edad, estatura){
    let aprendiz={
        nombre:nombre,
        edad:edad,
        estatura:estatura
    }
    console.log(aprendiz);
}

crearAprendiz(nombre, edad, estatura);