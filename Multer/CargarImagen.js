const multer= require('multer');
const mongoose=require('mongoose')
const modelJugadores= require('../model/MoldeJugadores')

const storage= multer.diskStorage({

    destination:(req,file,callback)=>{
        const carpetaDocumento= '../projectreactutndos/public/imagenes' //donde se van a guardar los archivos
        callback(null,carpetaDocumento)

    },
   
     filename:async(req,file,callback)=>{
        const formato=file.originalname.split(".").pop() //agarra el formato del archivo original
        const nombreArchivo=`img-${Date.now()}.${formato}` //usando el date now crea un nombre unico y le agrega el formato 
        callback(null,nombreArchivo)
        
        console.log(nombreArchivo)

        //let resultado= await modelJugadores.collection.insertOne(nombreArchivo)
       
        }
        

})
const upload= multer({storage});
module.exports=upload;