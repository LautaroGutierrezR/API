
const Players=[
    {
        Nombre:"Erling Haaland",
        Fecha:"20/6/1999",
        Equipo: "Manchester City",
        Posicion:"Delantero",
         Imagen:"./imagenes/Haaland.jpg"},
    
        {
            Nombre:"Lautaro Acosta",
            Fecha:"14/3/1988",
            Equipo: "Lanus",
            Posicion:"Delantero" ,
            Imagen:"./imagenes/Laucha.jpg"

        },
    
        {
            Nombre:"Pepe Sand",
            Fecha:"17/7/1980",
            Equipo: "Lanus",
            Posicion:"Delantero" ,
            Imagen:"./imagenes/pepe.jpg"
        },
    
    
        {
            Nombre:"Kyle Walker",
            Fecha:"28/5/1990",
            Equipo: "Manchester City",
            Posicion:"Defensor" ,
            Imagen:"./imagenes/kyle-walker.jpg"
        }
]



const ListaJugadores=(req,res)=>{
    let infoJSON=JSON.stringify(Players)
    res.send(infoJSON)

};


module.exports={ListaJugadores}
    
