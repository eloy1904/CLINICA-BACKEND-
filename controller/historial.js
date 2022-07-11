'use strict'

const { reset } = require("nodemon");
var client = require("../database/db");
var db = client.db("clinicabd");

var controller = {
    //LISTAR
    list: function (req, res) {
        console.log("----------------");
        console.log("ENTRANDO A LA FUNCION LISTAR");
        db.collection("historial").find().toArray(
            (error, dataHistorial) => {
                if (error || !dataHistorial) {
                    return res.status(404).send({
                        message: "No se encontro el historial"
                    });
                } else {
                    return res.status(200).send({
                        status: "success",
                        historial: dataHistorial
                    });
                }
            }

        );
    },
    // BUSCAR
    find: function (req, res) {
        console.log("----------------");
        console.log("ENTRANDO A LA FUNCION FIND");
        console.log("id:" + req.params.id);
        db.collection("historial").find({ historialId: parseInt(req.params.id) }).toArray(
            (error, dataHistorial) => {
                if (error || !dataHistorial) {
                    return res.status(404).send({
                        message: "No se encontro el producto"
                    });
                } else {
                    return res.status(200).send({
                        status: "success",
                        historial: dataHistorial[0]
                    });
                }
            }
        );
    },
    // GUARDAR
    save: function (req, res) {
        console.log("----------------");
        console.log("ENTRANDO A LA FUNCION SAVE");
        console.log(req.body);
        if (req.body.historialId == "0") {// SI ES NUEVO
            console.log("ENTRANDO A NUEVO");
            db.collection("historial").count().then(
                countHistorial => {
                    var historial = {}
                    historial.historialId = countHistorial + 1;
                    historial.nombre = req.body.nombre;
                    historial.contacto = req.body.contacto;
                    //historial.enfermedad = req.body.enfermedad;
                    //historial.antecedentes = req.body.antecedentes
                    db.collection('historial').insertOne(historial,
                        (error, result) => {
                            if (error) {
                                return res.status(404).send({
                                    message: "No se pudo registrar el historial"
                                });
                            } else {
                                return res.status(200).send({
                                    message: "success",
                                    historial: result
                                });
                            }
                        }
                    );
                }
            );
        } else {
            console.log("ENTRANDO A EDITAR");
            var historial = {}
            historial.historialId = parseInt(req.body.historialId);
            historial.nombre = req.body.nombre;
            historial.contacto = req.body.contacto;
            //historial.enfermedad = req.body.enfermedad;
            //historial.antecedentes = req.body.antecedentes
            console.log(historial);
            db.collection("historial").updateOne({ historialIdId: { $eq: parseInt(req.body.historialId) } },
                                                 { $set: historial },
                (error, result) => {
                    if (error) {
                        return res.status(404).send({
                            message: "No se pudo editar el historial"
                        });
                    } else {
                        return res.status(200).send({
                            message: "success",
                            historial: result
                        });
                    }
                }
            )


        }
    }
}

// EXPORTAR MODULO
module.exports = controller;