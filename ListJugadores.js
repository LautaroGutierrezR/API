
const Players=[
    {
        Nombre:"Erling Haaland",
        Fecha:"20/6/1999",
        Equipo: "Manchester City",
        Posicion:"Delantero"},
    
        {
            Nombre:"Lautaro Acosta",
            Fecha:"20/6/1999",
            Equipo: "Lanus",
            Posicion:"Delantero" 
        },
    
        {
            Nombre:"Pepe Sand",
            Fecha:"20/6/1999",
            Equipo: "Lanus",
            Posicion:"Delantero" 
        },
    
    
        {
            Nombre:"Kyle Walker",
            Fecha:"20/6/1999",
            Equipo: "Manchester City",
            Posicion:"Defensor" 
        }
]



const ListaJugadores=(req,res)=>{
    let infoJSON=JSON.stringify(Players)
    res.send(infoJSON)

};

const AgregarJugadores=(req,res)=>{

};
module.exports={ListaJugadores,AgregarJugadores}
    
