async function peticion(tipo, url, tipoRespuesta){
    var request = new XMLHttpRequest();
    
    request.open(`${tipo}`, `${url}`, true);
    request.responseType = `${tipoRespuesta}`;
    request.send();
    request.onload = function() {
        const response = request.response;
        const fecha = response.fecha;
        const hora = response.hora;
        document.getElementById("fecha").innerHTML = fecha;
        document.getElementById("hora").innerHTML = hora;
        return response;
    }
}

async function pedirFecha() {    
    const dias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
    ];
    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    const d = new Date();

    document.getElementById("fecha_hora").style = (d.getMinutes() == 0) ? "color: red":"color: white";
    if(d.getMinutes()==0 && d.getSeconds()==0){
        console.log("En punto");
    }

    var diaSemana = d.getDay();
    var diaMes = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate();
    var mes = meses[d.getMonth()];
    var hora = (d.getHours() > 12) ? d.getHours() - 12 : d.getHours();
    hora = (hora < 10) ? '0' + hora : hora;
    var minuto = (d.getMinutes() < 10) ? '0' + d.getMinutes() : d.getMinutes();
    var segundo = (d.getSeconds() < 10) ? '0' + d.getSeconds() : d.getSeconds();

    const fecha = `${diaMes} ${mes} ${d.getFullYear()}`;
    const horaActual = `${hora}:${minuto}:${segundo}`;
    
    document.getElementById("dia_semana").innerHTML = dias[diaSemana];
    document.getElementById("fecha").innerHTML = fecha;
    document.getElementById("hora").innerHTML = horaActual;
}

async function run(){
    const url = "http://localhost:5000";
    // await setInterval(peticion, 500, "GET",`${url}/fecha`,"json");
    await setInterval(pedirFecha, 100);
}

run();