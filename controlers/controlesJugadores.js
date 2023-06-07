
const{traerDocCompleta,cargarJugador,eliminarUnJugador,actualizarJugador}=require('../utils/funcionesMongo')

//const {agregarJugador}require('../model/MoldeJugadores')

const TraerInfoMongo=async(req,res)=>{
   let infoMongo= await traerDocCompleta()
   //console.log(infoMongo)
   res.send(infoMongo);
}




  const agregarJugador =async(req,res)=>{
   //const imagen="http:localhost:3090/public"+req.file.nombreArchivo
   //creamos una variable en la cual ponemos los name del formulario y lo igualamos a req.body es decir la peticion del front, 
   let { Nombre_jugador,nacimiento_jugador,Equipo_jugador,Posicion}= req.body
   let Rutaimagen=req.file.filename
   console.log(req.file)
    let newJugador = await cargarJugador(Rutaimagen,Nombre_jugador,nacimiento_jugador,Equipo_jugador,Posicion)
    //luego creamos la variable new jugador y usando la funcion cargar jugador le pasamos como parametros los inputs del formulario
    //console.log(newJugador)
     //res.send(newJugador);
     res.redirect('http://localhost:3000/Jugadores')
     
 }



 const BorrarJugador =async(req,res)=>{
   
   //creamos una variable en la cual ponemos los name del formulario y lo igualamos a req.body es decir la peticion del front, 
   let { Nombre_JugadorDeleteado}= req.body
   console.log(req.body)
    let newJugador = await eliminarUnJugador({Nombre:`${Nombre_JugadorDeleteado}`})
    //luego creamos la variable new jugador y usando la funcion eliminarUnJugador jugador le pasamos como parametros los inputs del formulario
    
     res.redirect('http://localhost:3000/Jugadores')
     
 }


   const ModificarJugador =async(req,res)=>{
   
   //creamos una variable en la cual ponemos los name del formulario y lo igualamos a req.body es decir la peticion del front, 
   let { NombreJugadorActualizar,select,Dato_actualizado}= req.body
   let setConDato = {select,Dato_actualizado};
 
   
   
   console.log(NombreJugadorActualizar,select,Dato_actualizado)
    let newJugador = await actualizarJugador({Nombre:`${NombreJugadorActualizar}`},{setConDato})
   
    res.redirect('http://localhost:3000/Jugadores')
     
 }

 //actualizarJugador({Nombre:"Lautaro Gutierrez R"},{Equipo:"Banus"})

module.exports={TraerInfoMongo,agregarJugador,BorrarJugador,ModificarJugador}