
//testing Pacientes//



            
        
function consultaTurnoPaciente (){
  if (localStorage.getItem('usuariologueado') === null){
       $('#modalPacienteSesion').modal("show");
            
      var testingModalSinLog = `
            <h1>¡Hola!</h1>
            <br>
            <p>Por favor, Inicie Sesión .</p>
            <p>para gestionar sus datos</p>
            </div>
            `
            modalPacienteLogueado.innerHTML = testingModalSinLog;}
 if(localStorage.getItem('rTurnos') === null){
    $('#modalPacienteSesion').modal("show");
    let elimTurno = document.getElementById('elimiTurno').style.visibility = "collapse";
    let solicTurno = document.getElementById('soliciTurno').style.visibility = "collapse";
    const logueoForTesting = JSON.parse(localStorage.getItem('usuariologueado'));
    const pacienteEntrado = logueoForTesting;
    const pacLog = {
    id : pacienteEntrado.id,
    nombre : pacienteEntrado.nombre,}
    
    var testingModalSinTurnos = `
            <h1>Hola, ${pacLog.nombre}</h1>
            <br>
            <p>Usted no tiene turnos asignados.</p>
            <p>Puede solicitar un turno haciendo click en el botón Turno</p>
            </div>
            `
            modalPacienteLogueado.innerHTML = testingModalSinTurnos;
    
}else{
const logueoForTesting = JSON.parse(localStorage.getItem('usuariologueado'));
const pacientesForTestings = JSON.parse(localStorage.getItem("rTurnos"));
const doctoresForTestings = JSON.parse(localStorage.getItem("rDoctores"));
 //validation for pacients//
const modalACargar = pacientesForTestings.find(function (pacienteForTest){
return pacienteForTest.dniPac == logueoForTesting.id;})
    
const profeACargar = doctoresForTestings.find(function (docTest){
  return docTest.cuil == modalACargar.doctores;})

const cuilDoctor = profeACargar;
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
//validation for doctors//

//    
// if(userLogued.turnoTesting == ''){
//            var testingModalSinTurnos = `
//            <h1>Hola, ${userLogued.nombre}</h1>
//            <br>
//            <p>Usted no tiene turnos asignados.</p>
//            <p>Puede solicitar un turno haciendo click en el botón Solicitar Turno</p>
//            </div>
//            `
//            modalPacienteLogueado.innerHTML = testingModalSinTurnos;
//        }else{
//            $('#modalPacienteSesion').modal("show");
//            
//                }
          
        

//function buttonEliminarTestTurno(){
//   $('#modalPacienteSesion').modal("hide");
//  let elimTurno = document.getElementById('elimiTurno').style.visibility = "collapse";
//  let solicTurno = document.getElementById('soliciTurno').style.visibility = "visible";
//
//}

// function pacienteProfesional (){
//   $('#modalProfesionalSesion').modal("show");
//             var testingModalConTurnos = `
//                   <h1>Hola, ${profLogued.nombre} ${proForTesting.apellido}</h1>
//                   <br>
//                   <p>Usted tiene los siguientes pacientes para atender el día de hoy:</p>
//                 `
//                   modalPacienteLogueado.innerHTML = testingModalConTurnos;
//                 }
