//aqui estan las variables del sueldo

const salarioMensual = document.getElementById("salarioMensual");
const btnSalario = document.getElementById("btnSalario");
const diaDespido = document.getElementById("diaDespido");


const respuestaA = document.getElementById("respuestaA");
const respuestaB = document.getElementById("respuestaB");
const respuestaC = document.getElementById("respuestaC");
const respuestaD = document.getElementById("respuestaD");
const respuestaE = document.getElementById("respuestaE");


//aqui estan las variables de la bonificacion.
const diaDespidoBonificacion = document.getElementById("diaDespidoBonificacion");
const sueldoRealEnBonificacion = document.getElementById("sueldoRealEnBonificacion");
const btnBonificacion = document.getElementById("btnBonificacion");

const respuestaBonificacionA = document.getElementById("respuestaBonificacionA");
const respuestaBonificacionB = document.getElementById("respuestaBonificacionB");


//aqui estan la variables del aguinaldo
const salarioMenusalAguinaldo = document.getElementById("salarioMenusalAguinaldo");
const diaDespidoAguinaldo = document.getElementById("diaDespidoAguinaldo");
const mesDespido = document.getElementById("mesDespido");
const btnAguinaldo = document.getElementById("btnAguinaldo");

const respuestaAguinaldo = document.getElementById("respuestaAguinaldo");


//aqui estan las variable de las vacaciones

const diaInicioTrabajoVacaciones = document.getElementById("diaInicioTrabajoVacaciones");
const mesInicioTrabajoVacaciones = document.getElementById("mesInicioTrabajoVacaciones");
const diaDespidoVacaciones = document.getElementById("diaDespidoVacaciones");
const mesDespidoVacaciones = document.getElementById("mesDespidoVacaciones");
const btnVacaciones = document.getElementById("btnVacaciones");
const salarioMensualVacaciones = document.getElementById("salarioMensualVacaciones");

const respuestaVacacionesA = document.getElementById("respuestaVacacionesA");
const respuestaVacacionesB = document.getElementById("respuestaVacacionesB");
const respuestaVacacionesC = document.getElementById("respuestaVacacionesC");
const respuestaVacacionesD = document.getElementById("respuestaVacacionesD");
const respuestaVacacionesE = document.getElementById("respuestaVacacionesE");
const respuestaVacacionesF = document.getElementById("respuestaVacacionesF");
const respuestaVacacionesG = document.getElementById("respuestaVacacionesG");


//funcion para el salario
btnSalario.addEventListener("click", ()=>{
    let salarioDiario = salarioMensual.value / 30;
    respuestaA.innerHTML = salarioDiario;

    let nuevoSalario = salarioDiario * diaDespido.value;
    respuestaB.innerHTML = nuevoSalario;

    igss = (nuevoSalario * 4.83)/100;
    respuestaC.innerHTML = igss;

    isr = (nuevoSalario * 5)/100;
    respuestaD.innerHTML = isr;

    sueldoReal = nuevoSalario - igss - isr;
    respuestaE.innerHTML = sueldoReal
});



//funcion para bonificacion.
btnBonificacion.addEventListener("click", ()=>{
    let bono = 250;
    let diasMes = 30;

    let bonoAFecha = (diaDespidoBonificacion.value * bono)/diasMes;
    respuestaBonificacionA.innerHTML = bonoAFecha;

    let sueldoMasBono = parseFloat(sueldoRealEnBonificacion.value) + bonoAFecha;
    respuestaBonificacionB.innerHTML = sueldoMasBono;

});



//funcion del aguinaldo
btnAguinaldo.addEventListener("click", ()=>{
   let diasAnio = 360;
   let totalMeses = mesDespido.value -1;
   let totaldiasAguinaldo = totalMeses * 30;
   let diasMesMasFechaDespido = parseFloat(totaldiasAguinaldo) + parseFloat(diaDespidoAguinaldo.value);
   
   
    let resultadoAguinaldo = (salarioMenusalAguinaldo.value * diasMesMasFechaDespido)/ diasAnio;
    respuestaAguinaldo.innerHTML = resultadoAguinaldo;
});


//funcion de las vacaciones

btnVacaciones.addEventListener("click", ()=>{
    let diasAnio = 360;
    let derechoVacas = 15;
var sumaDiasIncompletos = parseFloat(30 - diaInicioTrabajoVacaciones.value) + parseFloat(diaDespidoVacaciones.value);





    if(parseFloat(mesDespidoVacaciones.value) <= parseFloat(mesInicioTrabajoVacaciones.value)){
        var mesesA = 12 - mesInicioTrabajoVacaciones.value;
        mesesA = mesesA * 30;

        var mesesB = mesDespidoVacaciones.value -1;
        mesesB = mesesB *30;

        var diasVacasA = mesesA + mesesB;

        diasVacasA = diasVacasA + sumaDiasIncompletos;

    }
    else if(mesDespidoVacaciones.value > mesInicioTrabajoVacaciones.value){
        mesesA = (mesDespidoVacaciones.value - mesInicioTrabajoVacaciones.value) -1;
        mesesA = mesesA *30;

        diasVacasA = mesesA + sumaDiasIncompletos;
    }


    if(diasVacasA < 360){
        respuestaVacacionesA.innerHTML = diasVacasA;
    }
    else if (diasVacasA = 360){
        respuestaVacacionesA.innerHTML = "OJO, porque ya son 360 dias"
    }

    let diasAPagar = (diasVacasA * derechoVacas) / diasAnio;
    respuestaVacacionesB.innerHTML = diasAPagar;

    let diasAPagarAproxi = Math.ceil(diasAPagar)
    respuestaVacacionesC.innerHTML = diasAPagarAproxi;



let sueldoPorDiaVacas = salarioMensualVacaciones.value / 30; 

let sueldoAntesIgssIsrr = sueldoPorDiaVacas *  diasAPagarAproxi;
respuestaVacacionesD.innerHTML = sueldoAntesIgssIsrr;

    let igss = (sueldoAntesIgssIsrr * 4.83) / 100;
    respuestaVacacionesE.innerHTML = igss;


    let isrVacas = (sueldoAntesIgssIsrr * 5) / 100;
    respuestaVacacionesF.innerHTML = isrVacas; 

    let resultadoVacaciones = sueldoAntesIgssIsrr - igss - isrVacas;
    respuestaVacacionesG.innerHTML = resultadoVacaciones;
    

})












