function promedio(total, cantidad){
    //calculamos el promedio
    let resultado = total/cantidad
    return resultado
}

function goles (goles, partSumada){
    return goles = goles + partSumada
}

function pedirCantidad(){
    let jugador = (prompt("Como se llama el Jugador"))
    let cantidadPartidos = parseInt(prompt(`Ingrese la cantidad de partidos que ${jugador} haya jugado`))   
    return cantidadPartidos
}

let partidos = 0;
let gol = 0;
let prom = 0;
let cantPartidos = pedirCantidad()
for (let i=0; i<cantPartidos; i++){
    partidos = parseInt(prompt(`Ingrese cuantos goles realizo en su partido Nro: ${i+1}`))
    gol = goles (gol, partidos)
}
prom = promedio(gol, cantPartidos)

console.log(`La suma total es de ${gol} goles en ${cantPartidos} partidos`);
console.log(`Su promedio es de ${prom} goles por partido`);

if(prom <=2){
    console.log("El promedio de tu jugador es bueno")
}else if(prom <=4){
    console.log("El promedio de tu jugador es muy bueno") 
}
else if(prom <=10){
   console.log("El promedio de tu jugador es imparable") 
}
else{
   console.log("Tiene un promedio bajo")
}