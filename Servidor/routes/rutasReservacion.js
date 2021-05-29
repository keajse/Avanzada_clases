//Traer el método router de express para personalizar las rutas.

const { Router }= require('express');

//Importar (traer) los controladores.

const { getReservas } = require('../controllers/controladorReservas.js');
const { addReservas } = require('../controllers/controladorReservas.js');
const { updateReservas } = require('../controllers/controladorReservas.js');
const { deleteReservas } = require('../controllers/controladorReservas.js');
const { getDataReserva } = require('../controllers/controladorReservas.js');

//Importar validaciones
const {validatorRequest}=require('../validations/validations.js');


//Importar el metodo check del express validations
const {check}=require('express-validator');

//Crear lista de validaciones
let validations=Array(
    check('nombre', "Este campo es obligatorio.").not().isEmpty(),
    check('apellido', "Este campo es obligatorio.").not().isEmpty(),
    check('identificacion', "Este campo es obligatorio.").not().isEmpty(),
    check('habitaciones', "Este campo es obligatorio.").not().isEmpty(),
    check('ciudad', "Este campo es obligatorio.").not().isEmpty(),
    check('fotoURL', "Este campo es obligatorio.").not().isEmpty(),

    validatorRequest
);

//Personalizar rutas

const rutas=Router();

//Listado de rutas.

rutas.get('/reserva/consulta', getReservas);
rutas.get('/reserva/consult/:id', getDataReserva);
rutas.post('/reserva/nueva', validations, addReservas);
rutas.put('/reserva/editar/:id', updateReservas);
rutas.delete('/reserva/eliminar/:id', deleteReservas);


//Enviar al modelo (exportar)
module.exports=rutas;