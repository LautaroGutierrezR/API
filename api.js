const express = require('express');
//const { ListaJugadores } = require('./ListaJugadores');
const api = express();
const cors=require("cors");
const puerto=3090;
const upload= require('./Multer/CargarImagen'); //esto despues deberia ser desglozado 
const mongoose= require('mongoose')
require('./config/database')
api.use(express.json());
api.use(cors());
api.use(express.urlencoded({extended:true}))
api.use('',require('./routes/routes'))






api.get("/home",(req,res)=>{
    res.send("corriendo en el puerto ASDFASDFG ");
})

//api.get("/ListaJugadores",ListaJugadores);
//api.post("/AgregarJugadores",upload.single("imagen"),AgregarJugadores);


api.post("/CargarImagen",upload.single('imagen'),(req,res)=>{
    console.log(req.file.filename)
    res.send("Foto Cargada")
   

     
})


api.listen(puerto,()=>{
    console.log("Funcionando en el puerto "+puerto)
  });

  