//Se trae de mongoose el modelo y el schema de datos.

const {model, Schema}=require('mongoose');


//Se crea el esqueleto de datos que va a tener cada documento (bolsa) de la colección.
const ReservaEsquema = Schema({
    nombre:{
        type: 'string',
        required: true
    },
    apellido:{
        type: 'string',
        required: true
    },
    identificacion:{
        type: Number,
        required: true
    },
    habitaciones:{
        type: Number,
        required: true
    },
    ciudad:{
        type: 'string',
        required: true
    },
    fotoURL:{
        type: 'string',
    }
});

module.exports = model('Reserva', ReservaEsquema);