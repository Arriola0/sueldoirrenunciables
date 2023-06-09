//aqui estan las variables del sueldo

const salarioMensual = document.getElementById("salarioMensual");
const btnSalario = document.getElementById("btnSalario");
const diaDespido = document.getElementById("diaDespido");

const respuestaProcedimientoSalarioA = document.getElementById("respuestaProcedimientoSalarioA");
const respuestaProcedimientoSalarioB = document.getElementById("respuestaProcedimientoSalarioB");
const respuestaProcedimientoSalarioC = document.getElementById("respuestaProcedimientoSalarioC");
const respuestaProcedimientoSalarioD = document.getElementById("respuestaProcedimientoSalarioD");
const respuestaProcedimientoSalarioE = document.getElementById("respuestaProcedimientoSalarioE");



//aqui estan las variables de la bonificacion.
const diaDespidoBonificacion = document.getElementById("diaDespidoBonificacion");
const sueldoRealEnBonificacion = document.getElementById("sueldoRealEnBonificacion");
const btnBonificacion = document.getElementById("btnBonificacion");

const respuestaProcedimientoBonificacionA = document.getElementById("respuestaProcedimientoBonificacionA");
const respuestaProcedimientoBonificacionB = document.getElementById("respuestaProcedimientoBonificacionB");


//aqui estan la variables del aguinaldo
const salarioMenusalAguinaldo = document.getElementById("salarioMenusalAguinaldo");
const diaDespidoAguinaldo = document.getElementById("diaDespidoAguinaldo");
const mesDespido = document.getElementById("mesDespido");
const btnAguinaldo = document.getElementById("btnAguinaldo");

const respuestaAguinaldo = document.getElementById("respuestaAguinaldo");

const respuestaProcedimientoAguinaldo = document.getElementById("respuestaProcedimientoAguinaldo");


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




const respusetaProcedimientoVacacionesA = document.getElementById("respusetaProcedimientoVacacionesA");
const respusetaProcedimientoVacacionesB = document.getElementById("respusetaProcedimientoVacacionesB");
const respusetaProcedimientoVacacionesC = document.getElementById("respusetaProcedimientoVacacionesC");
const respusetaProcedimientoVacacionesD = document.getElementById("respusetaProcedimientoVacacionesD");
const respusetaProcedimientoVacacionesE = document.getElementById("respusetaProcedimientoVacacionesE");
const respusetaProcedimientoVacacionesF = document.getElementById("respusetaProcedimientoVacacionesF");
const respusetaProcedimientoVacacionesG = document.getElementById("respusetaProcedimientoVacacionesG");


//funcion para el salario
btnSalario.addEventListener("click", ()=>{
    let salarioDiario = salarioMensual.value / 30;

    let nuevoSalario = salarioDiario * diaDespido.value;

    let igss = (nuevoSalario * 4.83)/100;

    let isr = (nuevoSalario * 5)/100;
    
    let sueldoReal = nuevoSalario - igss - isr;
    

//procedimeinto del salario

respuestaProcedimientoSalarioA.innerHTML = `${salarioMensual.value} / 30 = <b>${salarioDiario}</b>`;

respuestaProcedimientoSalarioB.innerHTML = `${salarioDiario} * ${diaDespido.value} = <b>${nuevoSalario}</b>`;

respuestaProcedimientoSalarioC.innerHTML = `${nuevoSalario} * 4.83% = <b>${igss}</b>`;

respuestaProcedimientoSalarioD.innerHTML = `${nuevoSalario} * 5% = <b>${isr}</b>`;

respuestaProcedimientoSalarioE.innerHTML = `${nuevoSalario} - ${igss} - ${isr} = <b>${sueldoReal}</b>`;


});





//funcion para bonificacion.
btnBonificacion.addEventListener("click", ()=>{
    let bono = 250;
    let diasMes = 30;

    let bonoAFecha = (diaDespidoBonificacion.value * bono)/diasMes;

    let sueldoMasBono = parseFloat(sueldoRealEnBonificacion.value) + bonoAFecha;


//procedimiento de la bonificacion

    respuestaProcedimientoBonificacionA.innerHTML = `${bono} * ${diaDespidoBonificacion.value} / ${diasMes} = <b>${bonoAFecha}</b>`;

    respuestaProcedimientoBonificacionB.innerHTML = `${sueldoRealEnBonificacion.value} + ${bonoAFecha} = <b>${sueldoMasBono}</b>`;



});



//funcion del aguinaldo
btnAguinaldo.addEventListener("click", ()=>{
   let diasAnio = 360;
   let totalMeses = mesDespido.value -1;
   let totaldiasAguinaldo = totalMeses * 30;
   let diasMesMasFechaDespido = parseFloat(totaldiasAguinaldo) + parseFloat(diaDespidoAguinaldo.value);
   
    let resultadoAguinaldo = (salarioMenusalAguinaldo.value * diasMesMasFechaDespido)/ diasAnio;

//procedimiento del aguinaldo

    respuestaProcedimientoAguinaldo.innerHTML = `${salarioMenusalAguinaldo.value} * ${diasMesMasFechaDespido} / ${diasAnio} = <b>${resultadoAguinaldo}</b>`;


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
    else if(parseFloat(mesDespidoVacaciones.value) > parseFloat(mesInicioTrabajoVacaciones.value)){
        var mesesC = (mesDespidoVacaciones.value - mesInicioTrabajoVacaciones.value) -1;
        mesesC = mesesC *30;

        diasVacasA = mesesC + sumaDiasIncompletos;
    }



    let diasAPagar = (diasVacasA * derechoVacas) / diasAnio;
    

    let diasAPagarAproxi = Math.ceil(diasAPagar)


let sueldoPorDiaVacas = salarioMensualVacaciones.value / 30; 

let sueldoAntesIgssIsrr = sueldoPorDiaVacas *  diasAPagarAproxi;


    let igss = (sueldoAntesIgssIsrr * 4.83) / 100;


    let isrVacas = (sueldoAntesIgssIsrr * 5) / 100;

    let resultadoVacaciones = sueldoAntesIgssIsrr - igss - isrVacas;


//procedimiento de vacaciones



respusetaProcedimientoVacacionesA.innerHTML = `Es un proceso largo, por eso solo muestro el resultado = <b>${diasVacasA}</b>`;
respusetaProcedimientoVacacionesB.innerHTML = `${diasVacasA} * ${derechoVacas} / ${diasAnio} = <b>${diasAPagar}</b>`;
respusetaProcedimientoVacacionesC.innerHTML = `Aqui solo aproximamos el resultado anterior = <b>${diasAPagarAproxi}</b>`;
respusetaProcedimientoVacacionesD.innerHTML = `${salarioMensualVacaciones.value}/ 30 * ${diasAPagarAproxi} = <b>${sueldoAntesIgssIsrr}</b>`;
respusetaProcedimientoVacacionesE.innerHTML = `${sueldoAntesIgssIsrr} * 4.83% = <b>${igss}</b>`;
respusetaProcedimientoVacacionesF.innerHTML = `${sueldoAntesIgssIsrr} * 5% = <b>${isrVacas}</b>`;
respusetaProcedimientoVacacionesG.innerHTML = `${sueldoAntesIgssIsrr} - ${igss} - ${isrVacas} = <b>${resultadoVacaciones}</b>`;





});












