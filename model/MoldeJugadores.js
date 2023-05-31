const mongoose= require('mongoose')


let schemaJugadores = new mongoose.Schema({
    Imagen:{
      type:String,
      required:true
    },

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
module.exports=mongoose.model('ListaJugadoresMongo',schemaJugadores,'ListaJugadoresMongo')

//si no pones la el nombre de la base de datos mongoose te creara una en minuscula y en plural, es decir , con una s al final , en este caso serioa ;"listajugadoresmongos"
//module.exports=schemaJugadores;
