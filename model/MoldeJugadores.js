const mongoose= require('mongoose')


let schemaJugadores = new mongoose.Schema({
    Nombre:{
         type:String,
         required:true
    },
    Nacimiento:{
          type:String,
          required:true
    },
    Equipo:{
          type:String,
          required:true
    },
    Posicion:{
          type:String,
          required:true
    }
})
module.exports=mongoose.model('ListaJugadoresMongo',schemaJugadores)