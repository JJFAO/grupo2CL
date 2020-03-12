//testing Pacientes//
const logueoForTesting = JSON.parse(localStorage.getItem('usuariologueado'));
const pacientesForTestings = JSON.parse(localStorage.getItem("rTurnos"));
const doctoresForTestings = JSON.parse(localStorage.getItem("rDoctores"))

//validation for pacients//
const modalACargar = pacientesForTestings.find(function (pacienteForTest){
  return pacienteForTest.dniPac == logueoForTesting.id;
})
//validation for doctors//
const profeACargar = doctoresForTestings.find(function (docTest){
  return docTest.cuil == modalACargar.doctores;
})
const cuilDoctor = profeACargar
    const datoDoctor = {
      nombre: cuilDoctor.nombre,
      apellido: cuilDoctor.apellido,
    }

const userLogued = {
    id : modalACargar.id,
    nombre : modalACargar.nombrePac,
    apellido : modalACargar.apelliPopac,
    diasTesting: modalACargar.dias,
    turnoTesting: modalACargar.horario,
    doctor:datoDoctor.nombre + ' ' + datoDoctor.apellido,
  }

            
        
function consultaTurnoPaciente (){
  $('#modalPacienteSesion').modal("show");
//obtener validación si es profesional o paciente
    if (modalACargar == '')
    //validar si paciente tiene Turno
    {
      var testingModalSinTurnos = `
            <h1>Hola, ${userLogued.nombre}</h1>
            <br>
            <p>Usted no tiene turnos asignados.</p>
            <p>Puede solicitar un turno haciendo click en el botón Solicitar Turno</p>
            </div>
            `
            modalPacienteLogueado.innerHTML = testingModalSinTurnos;
          }else{
            $('#modalPacienteSesion').modal("show");
            document.getElementById('soliciTurno').style.visibility = "collapse";
            var testingModalConTurnos = `
                  <h1>Hola, ${userLogued.nombre}</h1>
                  <br>
                  <p>Usted tiene turno el día 
                  <p class="font-weight-bold">${userLogued.diasTesting}</p> 
                  <p class="font-weight-bold">entre las ${userLogued.turnoTesting} Hs</p>
                  <p class="font-weight-bold">con el doctor ${userLogued.doctor}</p>
                  <p> Por favor, llegue 15 min antes de su turno asignado
                  </div>
                  `
                  modalPacienteLogueado.innerHTML = testingModalConTurnos;
                }
          }
        








function buttonEliminarTestTurno(){
   $('#modalPacienteSesion').modal("hide");
  let elimTurno = document.getElementById('elimiTurno').style.visibility = "collapse";
  let solicTurno = document.getElementById('soliciTurno').style.visibility = "visible";

}

// function pacienteProfesional (){
//   $('#modalProfesionalSesion').modal("show");
//             var testingModalConTurnos = `
//                   <h1>Hola, ${profLogued.nombre} ${proForTesting.apellido}</h1>
//                   <br>
//                   <p>Usted tiene los siguientes pacientes para atender el día de hoy:</p>
//                 `
//                   modalPacienteLogueado.innerHTML = testingModalConTurnos;
//                 }
