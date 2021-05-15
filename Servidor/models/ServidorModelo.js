//Se trae el paquete express
const express = require('express')

//Traer las rutas.
const rutas= require('../routes/rutasReservacion.js');

class ServidorModelo {

    constructor() {
        //Atributo (variables) global para configurar el servidor.
        //This porque estoy dentro de una clase.
        this.app = express();
        this.llamarRutasAPI();
    }

    //Métodos (Que acciones hace mi servidor) 


    //Despertar servidor.
    levantarServidor() {
        //Levantamiento del servidor (conexión.)
        this.app.listen(process.env.PORT, function () {
            console.log(`Estoy conectado al puerto ${process.env.PORT}`)
        });
    }


    //Llamar rutas del API

    llamarRutasAPI(){
        this.app.use('/', rutas);
    }

}

module.exports = ServidorModelo;