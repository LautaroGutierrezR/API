              //Conexion con la DB Mongo//
              let mongoose=require('mongoose');
              const server='127.0.0.1:27017';
              const database='JugadoresMongo' 
              
              //`` backsticks para copiar y pegar :D//
              async function main(){
                  await mongoose.connect(`mongodb://${server}/${database}`)
              }
              main()
              .then((respOk)=>{console.log("Conexion exitosa sos un fenomeno")})
              .catch((err)=>{console.log("Error en la Conexion"+ err)})
              