const express= require('express');
const router = express.Router();
const {TraerInfoMongo,agregarJugador,BorrarJugador,ModificarJugador}=require('../controlers/controlesJugadores')
const upload= require('../Multer/CargarImagen'); //esto despues deberia ser desglozado 

router.get('/InfoCompleta',TraerInfoMongo);
router.post('/AgregarJugador',upload.single('imagen'),agregarJugador);
router.post('/BorrarJugador',BorrarJugador);
router.put('/ModificarJugador',ModificarJugador);



module.exports=router