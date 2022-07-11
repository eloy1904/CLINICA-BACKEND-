'use strict'

// requires

var mongoose = require('mongoose');
var app =require('./app')

//PUERTO SERVIDOR
var port =process.env.port || 3999;


//PRUEBA DE CONEXION A LA BASE DE DATOS
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Clinicadb:Clinica123@cluster0.aypfd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
                    ,{ useNewUrlParser: true})
                    .then(
                        ()=>{
                            console.log('La conexion a la bd es correcta');
                            //CREAR EL SERVIDOR
                            app.listen(port, ()=>{
                                console.log('el servidor http://192.168.100.93:3999 esta funcionando');
                            })
                        }
                    )
                    .catch(error => console.log(error));