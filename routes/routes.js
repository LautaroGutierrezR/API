const express= require('express');
const router = express.Router();
const {TraerInfoMongo,agregarJugador,BorrarJugador,ModificarJugador,Logeo,verificacionUsuario}=require('../controlers/controlesJugadores')
const upload= require('../Multer/CargarImagen'); //esto despues deberia ser desglozado 
const {ListaJugadores} = require('../ListaJugadores');

router.get('/InfoCompleta',TraerInfoMongo);
router.get("/ListaJugadores",ListaJugadores);

router.post('/AgregarJugador',upload.single('imagen'),agregarJugador);
router.post('/BorrarJugador',verificacionUsuario,BorrarJugador);
router.post('/Logeo',Logeo)

router.put('/ModificarJugador',ModificarJugador);




module.exports=router