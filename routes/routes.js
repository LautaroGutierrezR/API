const express= require('express');
const router = express.Router();
const {TraerInfoMongo}=require('../controlers/controlesJugadores')

router.get('/InfoCompleta',TraerInfoMongo);
router.post('/AgregarJugador',(req,res)=>{});

module.exports=router