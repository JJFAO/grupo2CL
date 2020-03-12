        
function consultaTurnoPaciente (){
  if (localStorage.getItem('usuariologueado') === null){
       $('#modalPacienteSesion').modal("show");
       let elimTurno = document.getElementById('elimiTurno').style.visibility = "collapse";
       let solicTurno = document.getElementById('soliciTurno').style.visibility = "collapse";          
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
    let elimTurno = document.getElementById('elimiTurno').style.visibility = "show";

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
function deleteTurno(){
localStorage.removeItem(rTurnos);
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
}
}

function consultaProfesional(){

  if (localStorage.getItem('profelogueado') === null){

    $('#modalPacienteSesion').modal("show");
    let elimTurno = document.getElementById('elimiTurno').style.visibility = "collapse";
    let solicTurno = document.getElementById('soliciTurno').style.visibility = "collapse";          
   

    function getLocal(key) {
      return JSON.parse(localStorage.getItem(key))};
      getLocal()


    const paciente = JSON.parse(localStorage.getItem("Pacientes"));
    let apellPac = document.querySelector("#apellido");
    let nombPac = document.querySelector("#nombre");
    let edadPac = document.querySelector("#edad");
    let dni = document.querySelector("#documento")
    
    for (let i = 0; i < paciente.length; i++) {
    const aPacientes = paciente[i];
       
   
      var testingModalSinLog = `
   <h1 class="textoProfesional" id="profesionales">Buen día, Profesional</h1>
   <p> Sus pacientes del día son: </p>
    <div id="tablaPacientes">
     <table class="table w-100 pl-0 mt-0">
       <thead class="thead-light">
         <tr class="text-center" id="TablaPacientes">
           <th scope="col" style="width: 13vw;">Horario</th>
           <th scope="col" style="width: 13vw;">Paciente</th>
           <th scope="col" style="width: 13vw;">Edad</th>
           <th scope="col" style="width: 13vw;">Documento</th>
         </tr>
       </thead>
       `
         modalPacienteLogueado.innerHTML = testingModalSinLog
         tablaPacientes.innerHTML += `
         <tr id="TablaPacientes" class="thead-light">
             <td>${aPacientes.apellido + " " + aPacientes.nombre}</td>
             <td>${aPacientes.edad}</td>
             <td>${aPacientes.documento}</td>
         </tr>
         `;
        
     };}  
}