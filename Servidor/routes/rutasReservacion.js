//Traer el método router de express para personalizar las rutas.

const { Router }= require('express');

//Importar (traer) los controladores.

const { getReservas } = require('../controllers/controladorReservas.js');
const { addReservas } = require('../controllers/controladorReservas.js');
const { updateReservas } = require('../controllers/controladorReservas.js');
const { deleteReservas } = require('../controllers/controladorReservas.js');

//Personalizar rutas

const rutas=Router();

//Listado de rutas.

rutas.get('/reservas', getReservas);
rutas.post('/reserva/nueva', addReservas);
rutas.put('/reserva/editar', updateReservas);
rutas.delete('/reserva/eliminar', deleteReservas);


//Enviar al modelo (exportar)
module.exports=rutas;