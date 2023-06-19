const jwt=require("jsonwebtoken")
const{traerDocCompleta,cargarJugador,eliminarUnJugador,actualizarJugador}=require('../utils/funcionesMongo');
const { json } = require("express");

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
    
     res.redirect('http://localhost:3000/AdminJugadores')
     
 }


   const ModificarJugador =async(req,res)=>{
   
   //creamos una variable en la cual ponemos los name del formulario y lo igualamos a req.body es decir la peticion del front, 
   let { NombreJugadorActualizar,select,Dato_actualizado}= req.body
   let setConDato = {[select]:Dato_actualizado};
 
   console.log(NombreJugadorActualizar,select,Dato_actualizado)
    let newJugador = await actualizarJugador({Nombre:`${NombreJugadorActualizar}`},setConDato)
   
    res.send('ok')
     
 }
       //actualizarJugador({Nombre:"Lautaro Gutierrez R"},{Equipo:"Banus"})

 const Logeo =(req,res)=>{
  //verificamos si el usuario esta registrado
  const{nombreUsuario,password}=req.body;

  const usuarioRegistrado={
    nombre:"Milanesa",
    pass:"Napolitana"
  }
    if(nombreUsuario === usuarioRegistrado.nombre && password === usuarioRegistrado.pass) {
      
      
      jwt.sign({nombreUsuario},"contraseñaSuperSegura",{expiresIn:'30m'},(error,token)=>{
           if(error){
            res.send(error)
           }
           else{
            
            //res.json({token})
              res.redirect("http://localhost:3000/AdminJugadores")
              console.log(`Podes pasar pibe, este es tu Token ${token}`)
           }
         
      })
      
    }
    else{
      res.send("Anda pa alla bobo")
    }
 }
 //error no trae el valor del token
 const verificacionUsuario=(req,res,next)=>{
  
  const authToken= req.headers.authorization;
  const token=authToken.split(" ").pop()
  console.log(authToken)
   
  //next()

  jwt.verify(token,"contraseñaSuperSegura",(error,data)=>{
      
        if(error){
          res.send(error)
        }else{
          console.log(data)
          next()
        }
  });
  };
 // command + k +c para comentar todo
// comand + k + U para descomentar todo

module.exports={TraerInfoMongo,agregarJugador,BorrarJugador,ModificarJugador,Logeo,verificacionUsuario}