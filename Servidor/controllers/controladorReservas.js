//Importar de express las variables request y response

const { request, response }=require('express');



// Se crean funciones para cada uno de los servicios que prestará el api, menú del restaurante.
function getReservas(req=request, res=response){
    res.json({
        estado: true,
        mensaje: "Plato de tipo GET"
    });
}

function addReservas(req=request, res=response){
    res.json({
        estado: true,
        mensaje: "Plato de tipo POST"
    });
}

function updateReservas(req=request, res=response){
    res.json({
        estado: true,
        mensaje: "Plato de tipo PUT"
    });
}

function deleteReservas(req=request, res=response){
    res.json({
        estado: true,
        mensaje: "Plato de tipo DELETE"
    });
}

//Para exportar archivos. Se colocan las llaves porque son más de una.

module.exports = {
    getReservas, 
    addReservas, 
    updateReservas, 
    deleteReservas,
}