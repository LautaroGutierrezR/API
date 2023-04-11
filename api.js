const express = require('express');
const { ListaJugadores, AgregarJugadores } = require('./ListJugadores');
const api = express();
const cors=require("cors");
const puerto=3090;

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


