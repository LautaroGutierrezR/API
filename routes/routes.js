const express= require('express');
const router = express.Router();
const {TraerInfoMongo,agregarJugador,BorrarJugador}=require('../controlers/controlesJugadores')
const upload= require('../Multer/CargarImagen'); //esto despues deberia ser desglozado 

router.get('/InfoCompleta',TraerInfoMongo);
router.post('/AgregarJugador',upload.single('imagen'),agregarJugador);
router.post('/BorrarJugador',BorrarJugador);


module.exports=router