class Partido {
    constructor(estadio, hora, local, visitante, golesA, golesB, ganador, perdedor, empate) {
        this.partidoEstadio = estadio;
        this.partidoHora = hora;
        this.equipoLocal = local;
        this.equipoVisitante = visitante;
        this.golesLocal = golesA; //parseInt(prompt("Ingresa goles del equipo A"));
        this.golesVisitante = golesB; //parseInt(prompt("Ingresa goles del equipo B"));
        this.ganador = ganador;
        this.perdedor = perdedor;
        this.empate = empate;
        this.resultadoPronostico = [golesA, golesB]; //por ahora esto no se usa pero la idea es que se use para comprar si es pronostico es acertado o no
    }
    pronostico(){
        console.log("Tu pronostico para este resultado es Equipo local: " + this.golesLocal + " Equipo visitante: " + this.golesVisitante,);
    }
    
}
//crea un array vacio que se llama campeonato
const fecha = [];  


//se declara una variable vacia
let nuevoPronostico = 0;

//funcion para agregar un objeto al array vacio
function agregarPronostico(fecha){
    //se pide por prompt los goles para equipo local y visitante
    let golesA = prompt("ingrese goles para el equipo local");
    let golesB = prompt("ingrese goles para el equipo visitante");
    let ganador = "";
    let perdedor = "";
    let empate =";"
    //se definen los valores del nuevo objeto
    nuevoPronostico = new Partido("Estadio-1", "16.20Hs" , "EquipoA", "EquipoB", golesA, golesB, ganador, perdedor, empate);
    fecha.push(nuevoPronostico);

    //se anuncia por consola que un nuevo pronostico ha sido agregado
    console.log("se agrego el pronostico ", nuevoPronostico);
}

//se pide que se ingresen cuatro pronosticos nuevos, llamando a la funcion agregarPronostico
for (let index = 0; index < 3; index++) {
    agregarPronostico(fecha);

    //se pasan los objetos del array campeonato por el metodo pronostico
    nuevoPronostico.pronostico();

    //se comparan los valores indicados como goles de cada equipo y aviso por alert el ponostico del partido
    if (nuevoPronostico.golesLocal > nuevoPronostico.golesVisitante) {
        nuevoPronostico.ganador = "Equipo Local";
        nuevoPronostico.perdedor = "Equipo Visitante";
        alert("gana equipo local ");
    } else if (nuevoPronostico.golesLocal < nuevoPronostico.golesVisitante) {
        nuevoPronostico.ganador = "Equipo Visitante";
        nuevoPronostico.perdedor = "Equipo Local";
        alert("gana equipo visitante");
    } else {
        nuevoPronostico.empate = "Partido empatado";
        alert("partido empatado")
    }
}
// esta funcion foreach itera sobre cada objeto partido del array fecha y me devuelve el ganador del encuentro
fecha.forEach(function(partido) {
    console.log("Ganador del encuentro " + partido.ganador)
  })