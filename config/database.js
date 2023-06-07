              //Conexion con la DB Mongo//
              require('dotenv').config()
              let mongoose=require('mongoose');



                 //Conexion local
              //const server='127.0.0.1:27017';
             // const database='JugadoresMongo' 
              
              //`` backsticks para copiar y pegar :D//
             // async function main(){
                  //await mongoose.connect(`mongodb://${server}/${database}`)
              //}
              //main()
              //.then((respOk)=>{console.log("Conexion exitosa sos un fenomeno")})
              //.catch((err)=>{console.log("Error en la Conexion"+ err)})


              //Conexion Remota ATLAS
            const user=process.env.USER_DB;
            const password=process.env.PASS_DB;

    async function main(){
      await mongoose.connect(`mongodb+srv://lautyguty97:${password}@db-jugadoresremota.rnmsal6.mongodb.net/?retryWrites=true&w=majority`)

            };
              main()
              .then((respOk)=>{console.log("Conexion exitosa sos un fenomeno a control remoto")})
              .catch((err)=>{console.log("Error en la Conexion"+ err)})