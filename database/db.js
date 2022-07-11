const {MongoClient} = require('mongodb');
//const {response} = require("../app");
const client = new MongoClient("mongodb+srv://Clinicadb:Clinica123@cluster0.aypfd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

client.connect().then(
    (response) =>{
        console.log('La conexion a la bd es correcta -url:'+ response.url);
    },
    (error) =>{
        console.log('error:'+ error);
    }
)

// EXPORTAR EL MODULO
module.exports = client;







