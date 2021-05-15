/*Ejemplo yargs

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

crearAprendiz(nombre, edad, estatura);

function crearAprendiz(nombre, edad, estatura){
    let aprendiz={
        nombre:nombre,
        edad:edad,
        estatura:estatura
    }
    console.log(aprendiz);
}

crearAprendiz(nombre, edad, estatura);*/

//Ejemplo Express




//Se trae el paquete de enviroment
require('dotenv').config()

//Enrutamiento del API req = peticion y res = respuesta

app.get('/reservas', function (req, res) {
    res.json({
        estado: true,
        mensaje: "Plato de tipo GET"
    });
});

app.post('/reserva/:id', function (req, res) {
    res.json({
        estado: true,
        mensaje: "Plato de tipo POST"
    });
});

app.put('/update', function (req, res) {
    res.json({
        estado: true,
        mensaje: "Plato de tipo PUT"
    });
});

app.delete('/delete', function (req, res) {
    res.json({
        estado: true,
        mensaje: "Plato de tipo DELETE"
    });
});


