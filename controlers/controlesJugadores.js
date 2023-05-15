//requerir DB let mongoose

const{traerDocCompleta,cargarJugador}=require('../utils/funcionesMongo')


const TraerInfoMongo=async(req,res)=>{
   let infoMongo= await traerDocCompleta()
   console.log(infoMongo)
   res.send(infoMongo);
}






module.exports={TraerInfoMongo}