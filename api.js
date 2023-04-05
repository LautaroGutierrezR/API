const express = require('express');
const api = express();
api.use(express.json());
const puerto=3090;

api.get("/home",(req,res)=>{
    res.send("corriendo en el puerto 3090 ");
})


api.listen(puerto,()=>{
    console.log("Funcionando en el puerto 3090")});