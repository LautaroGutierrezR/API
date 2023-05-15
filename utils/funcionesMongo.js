const modelJugadores= require('../model/MoldeJugadores')
const cargarJugador= async(NombreJugador,NacimientoJugador,EquipoJugador,PosicionJugador)=>{
    const nuevoJugador= new modelJugadores ({
        Nombre:NombreJugador,
        Nacimiento:NacimientoJugador,
        Equipo:EquipoJugador,
        Posicion:PosicionJugador,

    })
   let resultado= await modelJugadores.collection.insertOne(nuevoJugador)
   console.log(resultado)
}
//cargarJugador("hola","perro","gato","nada")


const traerDocCompleta=async()=>{
    let JugadoresGuardados= await modelJugadores.find();

    //console.log(JugadoresGuardados)
    return(JugadoresGuardados)
}
//traerDocCompleta()


module.exports={traerDocCompleta,cargarJugador}