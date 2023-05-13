const express = require('express');
const { ListaJugadores, AgregarJugadores } = require('./ListaJugadores');
const api = express();
const cors=require("cors");
const puerto=3090;
require('./config/database')
const modelJugadores= require('./MoldeJugadores')


const cargarJugador= async()=>{
    const nuevoJugador= new modelJugadores ({
        Nombre:"Hola",
        Nacimiento:"Base",
        Equipo:"alberto",
        Posicion:"bobina",

    })
   let resultado= await modelJugadores.collection.insertOne(nuevoJugador)
   console.log(resultado)
}
cargarJugador()


api.use(express.json());
api.use(cors());

api.get("/home",(req,res)=>{
    res.send("corriendo en el puerto ASDFASDFG ");
})

api.get("/ListaJugadores",ListaJugadores);
api.post("/AgregarJugadores",AgregarJugadores);


api.listen(puerto,()=>{
    console.log("Funcionando en el puerto"+puerto)
  });

  