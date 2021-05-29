const { body, validationResult } = require('express-validator');

const { request, response }=require('express');

function validatorRequest(req=request, res=response, next){

    let errores = validationResult(req);

    if(!errores.isEmpty){

        return (res.status(400).json(errores));

    }

    next();

}

module.exports = {validatorRequest}