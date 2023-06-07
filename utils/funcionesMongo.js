const modelJugadores= require('../model/MoldeJugadores')
const upload= require('../Multer/CargarImagen');








 const cargarJugador= async(Imagen,NombreJugador,NacimientoJugador,EquipoJugador,PosicionJugador)=>{
    const nuevoJugador= new modelJugadores ({
        Imagen:Imagen,
        Nombre:NombreJugador,
        Nacimiento:NacimientoJugador,
       Equipo:EquipoJugador,
        Posicion:PosicionJugador,

    })
   let resultado= await modelJugadores.collection.insertOne(nuevoJugador)
   console.log(resultado)
   
}



//cargarJugador("Julian Alvarez","31/1/2000","Manchester City","Delantero")


const traerDocCompleta=async()=>{
    let JugadoresGuardados= await modelJugadores.find();

    //console.log(JugadoresGuardados)
    return(JugadoresGuardados)
    //Guarda en una en la variable Jugadores guardados usando el metodo . find de mongoose
}
//traerDocCompleta()


const eliminarUnJugador=async(filtro)=>{
    let resultado=await modelJugadores.deleteOne(filtro);
    return resultado
    console.log("jugador eliminado")
}
//eliminarUnJugador({Nombre:"Pepo De La Vega"})


const actualizarJugador= async(filtro,datoActualizado)=>{
    let resultado= await modelJugadores.updateOne(filtro,{$set:datoActualizado})
    console.log(resultado)
}
//actualizarJugador({Nombre:"Lautaro Gutierrez R"},{Equipo:"Banus"})








module.exports={traerDocCompleta,cargarJugador,eliminarUnJugador,actualizarJugador}