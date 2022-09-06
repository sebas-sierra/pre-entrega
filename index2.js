class miResultado {
    constructor(estadio, hora, local, visitante, golesA, golesB, ganador, perdedor, empate) {
        this.partidoEstadio = estadio;
        this.partidoHora = hora;
        this.equipoLocal = local;
        this.equipoVisitante = visitante;
        this.golesLocal = golesA;
        this.golesVisitante = golesB;
        this.ganador = ganador;
        this.perdedor = perdedor;
        this.empate = empate;
        //this.id = index;//como añadir id?
    }
    pronostico(){
        console.log("Tu pronostico para este resultado es Equipo local: " + this.golesLocal + " Equipo visitante: " + this.golesVisitante,);
    }
    
}

let fechaMiResultado = []

//se declara una variable vacia que se va a guardar dentro del array fechaMiResultado
let nuevoPronostico = 0;

//funcion para agregar un objeto al array vacio
function agregarPronostico(fechaMiResultado){
    //se pide por prompt los goles para equipo local y visitante
    let golesA = parseInt(prompt("ingrese goles para el equipo local"));
    let golesB = parseInt(prompt("ingrese goles para el equipo visitante"));
    let ganador = "";
    let perdedor = "";
    let empate = "";
    //se definen los valores del nuevo objeto
    nuevoPronostico = new miResultado("Estadio-1", "16.20Hs" , "EquipoA", "EquipoB", golesA, golesB, ganador, perdedor, empate);
    fechaMiResultado.push(nuevoPronostico);

    //se anuncia por consola que un nuevo pronostico ha sido agregado
    console.log("se agrego el pronostico ", nuevoPronostico);
}

//se pide que se ingresen cuatro pronosticos nuevos, llamando a la funcion agregarPronostico
for (let index = 0; index < 3; index++) {
    agregarPronostico(fechaMiResultado);

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

//clase constructora objeto rasultado oficial
class resultadoOficial {
    constructor(local, visitante, golesA, golesB, ganador, perdedor, empate) {
        this.equipoLocal = local;
        this.equipoVisitante = visitante;
        this.golesLocal = golesA;
        this.golesVisitante = golesB;
        this.ganador = ganador;
        this.perdedor = perdedor;
        this.empate = empate;
    }   
}

//array vacio para guardar los resultados oficiales de lafecha
let fechaResultadoOficial = []

//funcion para agregar un objeto al array vacio
function agregarResultadoFinal(fechaResultadoOficial) {
    let ganador = "";
    let perdedor = "";
    let empate = "";
    //se definen los valores del nuevo objeto
    fechaResultadoOficial.push(new resultadoOficial("equipoLocalA", "equipoVisitanteB", 2, 5, ganador, perdedor, empate));
    fechaResultadoOficial.push(new resultadoOficial("equipoLocalC", "equipoVisitanteD", 0, 1, ganador, perdedor, empate));
    fechaResultadoOficial.push(new resultadoOficial("equipoLocalE", "equipoVisitanteF", 3, 3, ganador, perdedor, empate));
    fechaResultadoOficial.push(new resultadoOficial("equipoLocalG", "equipoVisitanteH", 1, 1, ganador, perdedor, empate));
    fechaResultadoOficial.push(new resultadoOficial("equipoLocalI", "equipoVisitanteJ", 3, 2, ganador, perdedor, empate));
}

//se llama a la funcion
agregarResultadoFinal(fechaResultadoOficial);

//se ejecuta un forEach por cada elemento
fechaResultadoOficial.forEach((resultadoOficial) => {
    if (resultadoOficial.golesLocal > resultadoOficial.golesVisitante) {
        resultadoOficial.ganador = "Equipo Local";
        resultadoOficial.perdedor = "Equipo Visitante";
        alert("gana equipo local ");
    } else if (resultadoOficial.golesLocal < resultadoOficial.golesVisitante) {
        resultadoOficial.ganador = "Equipo Visitante";
        resultadoOficial.perdedor = "Equipo Local";
        alert("gana equipo visitante");
    } else {
        resultadoOficial.empate = "Partido empatado";
        alert("partido empatado")
    }
})
console.log(fechaResultadoOficial);

//llamamos los partidos del array fechaResultadoOficial empatados usando un metodo filter y los mostramos por consola
const empatados = fechaResultadoOficial.filter((partido)=>partido.empate === "Partido empatado")
console.log(empatados)
console.log("ahora comparamos")







/*  Poner este for dentro de una funcion que se ejecute como ultima instancia luego de 
    cargar los promp con el pronostico de cada partido
    */
   //compara si los golesA del objeto miResultado son = o != a los golesA de resultadoOficial
   //for (let index = 0; index < fechaMiResultado.length; index++) {
    if (fechaMiResultado.golesLocal === fechaResultadoOficial.golesLocal && fechaMiResultado.golesVisitante === fechaResultadoOficial.golesVisitante){
        console.log("Tu pronostico fue exacto, sumas 5 puntos extra!")
    } else{
        console.log.apply("nada")
    }
