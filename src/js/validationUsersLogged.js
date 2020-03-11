//testing Pacientes//

const pacientesForTestings = JSON.parse(localStorage.getItem("usuariologueado"));
const turnoForTesting = JSON.parse(localStorage.getItem('rTurnos'));
const usuarioForTesting = pacientesForTestings;
const turnosForTesting = turnoForTesting;

    let userLogued= {
    id : usuarioForTesting.id,
    nombre : usuarioForTesting.nombre,
    apellido : usuarioForTesting.apellido,
    diasTesting: '',
    turnoTesting:'',
    doctor: '',
}

function consultaTurnoPaciente (){
  $('#modalPacienteSesion').modal("show");
  if (pacientesForTestings !== []){
    if(userLogued.turnoTesting ==''){
      $('#modalPacienteSesion').modal("show");
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
            var testingModalConTurnos = `
                  <h1>Hola, ${userLogued.nombre}</h1>
                  <br>
                  <p>Usted tiene turno el día 
                  <p>${userLogued.diasTesting}</p> 
                  <p>entre las ${userLogued.turnoTesting} Hs</p>
                  <p>con el doctor ${userLogued.doctor}</p>
                  <p> Por favor, llegue 15 min antes de su turno asignado
                  </div>
                  `
                  modalPacienteLogueado.innerHTML = testingModalConTurnos;
                }
          }
        }

        
function buttonTestTurno(){
  userLogued.diasTesting = 'Jueves 12 de Marzo de 2020',
  userLogued.turnoTesting = '16 a 17',
  userLogued.doctor = 'Juan José Alonso';
  $('#modalPacienteSesion').modal("hide");
  let elimTurno = document.getElementById('elimiTurno').style.visibility = "visible";
  let solicTurno = document.getElementById('soliciTurno').style.visibility = "collapse";
 
}
function buttonEliminarTestTurno(){
  userLogued.diasTesting = '',
  userLogued.turnoTesting = '',
  userLogued.doctor = '';
  $('#modalPacienteSesion').modal("hide");
  let elimTurno = document.getElementById('elimiTurno').style.visibility = "collapse";
  let solicTurno = document.getElementById('soliciTurno').style.visibility = "visible";

}

//testing Profesionales//
const profesForTesting = JSON.parse(localStorage.getItem("proflogueado"));
// const turnoForTesting = JSON.parse(localStorage.getItem('rTurnos'));
const proForTesting = profesForTesting;
// const turnosForTesting = turnoForTesting;

    let profLogued= {
    id : proForTesting.cuil,
    nombre : proForTesting.nombre,
    apellido : proForTesting.apellido,
    }

function pacienteProfesional (){
  $('#modalProfesionalSesion').modal("show");
            var testingModalConTurnos = `
                  <h1>Hola, ${profLogued.nombre} ${proForTesting.apellido}</h1>
                  <br>
                  <p>Usted tiene los siguientes pacientes para atender el día de hoy:</p>
                `
                  modalPacienteLogueado.innerHTML = testingModalConTurnos;
                }
