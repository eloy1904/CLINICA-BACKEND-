'use strict'

var client = require("../database/db");
var db = client.db("clinicabd");// NOMBRE DE LA BASE DE DATOS

var controller = {

    // REPORTE DE USUARIOS AGRUPADOS POR CATEGORIA
    pagosReport: function (req, res) { // Reporte de usuarios agrupados por categoria
        console.log("-------------------");
        console.log("ENTRANDO A LA FUNCION LISTAR POR CATEGORIA"); //Para verificar que esta entrando a la funcion
        db.collection("pagos").aggregate([ // Llamamos a la coleccion usuarios y agregamos el metodo aggregate, esto sirve para canalizar una condicion, agrupar/contar.
            { $group: { _id: "$Categoria", count: { $sum: 1 } } } // Group, para agrupar asi haya muchos registros, y le damos un id, y le sumamos 1, para que cuente los registros.
        ]).toArray( // Se agrega un array y se agrega elementos
            (error, dataPagos) => { // 
                if (error || !dataPagos) { // Si hay un error o no hay datos, se muestra un mensaje
                    return res.status(404).send({
                        message: "No se encontraron usuarios"
                    });
                } else {
                    return res.status(200).send({
                        status: "success",
                        pagosReport: dataPagos
                    });
                }
            }
        );
    }

}

module.exports = controller;