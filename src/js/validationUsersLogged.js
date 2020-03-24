
function consultaTurnoPaciente() {
  if (localStorage.getItem('profelogueado') !== null) {
    $('#modalPacienteSesion').modal("show");
    let elimTurno = document.getElementById('elimiTurno').style.visibility = "collapse";
    let solicTurno = document.getElementById('soliciTurno').style.visibility = "collapse";


<<<<<<< HEAD
    function getLocal(key) {
      return JSON.parse(localStorage.getItem(key))
    };
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

    };
=======
     function cargarListaPaciente() {
      const turnosDoctor = JSON.parse(localStorage.getItem("rTurnos")) || [];
      const docLogueado = JSON.parse(localStorage.getItem('profelogueado'));
    
    const mapDelTurno = turnosDoctor.filter(function(turnoDelDia){
    return turnoDelDia.doctores === docLogueado.id
    })
    
    var testingModalSinLog = `
  <h1 class="textoProfesional" id="profesionales">Buen día, ${docLogueado.nombre}</h1>
  <p> Sus pacientes del día son: </p>
   <div id="tablaPacientes">
    <table class="table w-100 pl-0 mt-0">
      <thead class="thead-light" id="tableroDePacientes">
        <tr class="text-center" id="TablaPacientes">
          <th scope="col" style="width: 13vw;">Horario</th>
          <th scope="col" style="width: 13vw;">Paciente</th>
          <th scope="col" style="width: 13vw;">Documento</th>
          <th scope="col" style="width: 13vw;">Motivo</th>
        </tr>
      </thead>
      </table>
      `
     modalPacienteLogueado.innerHTML = testingModalSinLog;
    
    // tablaPacientes.innerHTML = "";
    
    for (let i = 0; i < mapDelTurno.length; i++) {
        const turnos = mapDelTurno[i];
        tableroDePacientes.innerHTML += `
        <tr id="" class="thead-light">
          <td>${turnos.horario}</td>
          <td>${turnos.nombrePac + " " + turnos.apelliPopac}</td>
          <td>${turnos.dniPac}</td>
          <td>${turnos.textmedicalshit}</td>
        </tr>
        <br>
        `;
      }
    }
    cargarListaPaciente()

>>>>>>> dec00842c9ee98fd8cfc492d0d6060f81092fb82
  } else if (localStorage.getItem('usuariologueado') === null) {
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
    modalPacienteLogueado.innerHTML = testingModalSinLog;
  }

  if (localStorage.getItem('rTurnos') === null) {
    $('#modalPacienteSesion').modal("show");
    let elimTurno = document.getElementById('elimiTurno').style.visibility = "collapse";
    let solicTurno = document.getElementById('soliciTurno').style.visibility = "collapse";
    const logueoForTesting = JSON.parse(localStorage.getItem('usuariologueado'));
    const pacienteEntrado = logueoForTesting;
    const pacLog = {
      id: pacienteEntrado.id,
      nombre: pacienteEntrado.nombre,
    }

    var testingModalSinTurnos = `
            <h1>Hola, ${pacLog.nombre}</h1>
            <br>
            <p>Usted no tiene turnos asignados.</p>
            <p>Puede solicitar un turno haciendo click en el botón Turno</p>
            </div>
            `
    modalPacienteLogueado.innerHTML = testingModalSinTurnos;

  } else {
    const logueoForTesting = JSON.parse(localStorage.getItem('usuariologueado'));
<<<<<<< HEAD
    const pacientesForTestings = JSON.parse(localStorage.getItem("rTurnos"));
=======
    const pacientesForTestings = JSON.parse(localStorage.getItem("rTurnos"))|| [];
>>>>>>> dec00842c9ee98fd8cfc492d0d6060f81092fb82
    const doctoresForTestings = JSON.parse(localStorage.getItem("rDoctores"));
    //validation for pacients//
    const modalACargar = pacientesForTestings.find(function (pacienteForTest) {
      return pacienteForTest.dniPac == logueoForTesting.id;
    })

    const profeACargar = doctoresForTestings.find(function (docTest) {
      return docTest.cuil == modalACargar.doctores;
    })

    const cuilDoctor = profeACargar;
    const datoDoctor = {
      nombre: cuilDoctor.nombre,
      apellido: cuilDoctor.apellido,
    }

    const userLogued = {
      id: modalACargar.id,
      nombre: modalACargar.nombrePac,
      apellido: modalACargar.apelliPopac,
<<<<<<< HEAD
      diasTesting: modalACargar.dias,
      turnoTesting: modalACargar.horario,
      doctor: datoDoctor.nombre + ' ' + datoDoctor.apellido,
=======
>>>>>>> dec00842c9ee98fd8cfc492d0d6060f81092fb82
    }

    $('#modalPacienteSesion').modal("show");
    let elimTurno = document.getElementById('elimiTurno').style.visibility = "show";

    document.getElementById('soliciTurno').style.visibility = "collapse";

    var testingModalConTurnos = `
<<<<<<< HEAD
        <h1>Hola, ${userLogued.nombre}</h1>
        <br>
        <p>Usted tiene turno el día 
        <p class="font-weight-bold">${userLogued.diasTesting}</p> 
        <p class="font-weight-bold">entre las ${userLogued.turnoTesting} Hs</p>
        <p class="font-weight-bold">con el doctor ${userLogued.doctor}</p>
        <p> Por favor, llegue 15 min antes de su turno asignado
=======
        <h1>Hola, ${userLogued.nombre} ${userLogued.apellido}</h1>
        <br>
        <p>Usted tiene turno el día </p>
         <div id="tablaDeTurnos">
          <table class="table w-100 pl-0 mt-0">
            <thead class="thead-light " id="listTurnos">
              <tr class="text-center" id="TablaTurnos">
                <th scope="col" style="width: 13vw;">Día</th>
                <th scope="col" style="width: 13vw;">Horario</th>
                <th scope="col" style="width: 13vw;">Especialidad</th>
                <th scope="col" style="width: 13vw;">Doctor</th>
                <th scope="col" style="width: 13vw;">Cancelar</th>
              </tr>
            </thead>
            </table>
>>>>>>> dec00842c9ee98fd8cfc492d0d6060f81092fb82
        </div>
        `
    modalPacienteLogueado.innerHTML = testingModalConTurnos;

<<<<<<< HEAD
=======
    const mapDelNoTurno = pacientesForTestings.filter(function(turnosDelDia){
      return turnosDelDia.dniPac !== logueoForTesting.id
      })
   
    
    const mapDelTurno = pacientesForTestings.filter(function(turnosDelDia){
    return turnosDelDia.dniPac === logueoForTesting.id
    })

    console.log("Mapeo del No Turno", mapDelNoTurno)
    console.log("Mapeo del Turno", mapDelTurno)

    for (let i = 0; i < mapDelTurno.length; i++) {
      const turnos = mapDelTurno[i];
      var listadoTurnos = `
      <tbody>

        <td> ${turnos.dias}</td>
        <td>${turnos.horario}</td>
        <td>${turnos.especialidad}</td>
        <td>${cuilDoctor.nombre} ${cuilDoctor.apellido}</td>
        <td> <button id= "deleteEsteTurno" class="check2 text-danger border-0 bg-light">❌</button></td>       
      </tr>
      </tbody>
      `
      listTurnos.innerHTML +=listadoTurnos;
    }
  
>>>>>>> dec00842c9ee98fd8cfc492d0d6060f81092fb82
  }
}

let botonDeleteTurno = document.querySelector("#elimiTurno");
let eliminarTurno = false;

<<<<<<< HEAD
=======

>>>>>>> dec00842c9ee98fd8cfc492d0d6060f81092fb82
if (botonDeleteTurno) {
  botonDeleteTurno.addEventListener("click", deleteTurno);
  function deleteTurno() {
    if (eliminarTurno == false);
<<<<<<< HEAD
    localStorage.removeItem("rTurnos");
=======
    // localStorage.removeItem("rTurnos");
>>>>>>> dec00842c9ee98fd8cfc492d0d6060f81092fb82
    window.location.assign("index.html");
  }
}

<<<<<<< HEAD
function consultaProfesional() {

  // if (localStorage.getItem('profelogueado') !== null){

  //   $('#modalPacienteSesion').modal("show");
  //   let elimTurno = document.getElementById('elimiTurno').style.visibility = "collapse";
  //   let solicTurno = document.getElementById('soliciTurno').style.visibility = "collapse";          


  //   function getLocal(key) {
  //     return JSON.parse(localStorage.getItem(key))};
  //     getLocal()


  //   const paciente = JSON.parse(localStorage.getItem("Pacientes"));
  //   let apellPac = document.querySelector("#apellido");
  //   let nombPac = document.querySelector("#nombre");
  //   let edadPac = document.querySelector("#edad");
  //   let dni = document.querySelector("#documento")

  //   for (let i = 0; i < paciente.length; i++) {
  //   const aPacientes = paciente[i];


  //     var testingModalSinLog = `
  //  <h1 class="textoProfesional" id="profesionales">Buen día, Profesional</h1>
  //  <p> Sus pacientes del día son: </p>
  //   <div id="tablaPacientes">
  //    <table class="table w-100 pl-0 mt-0">
  //      <thead class="thead-light">
  //        <tr class="text-center" id="TablaPacientes">
  //          <th scope="col" style="width: 13vw;">Horario</th>
  //          <th scope="col" style="width: 13vw;">Paciente</th>
  //          <th scope="col" style="width: 13vw;">Edad</th>
  //          <th scope="col" style="width: 13vw;">Documento</th>
  //        </tr>
  //      </thead>
  //      `
  //        modalPacienteLogueado.innerHTML = testingModalSinLog
  //        tablaPacientes.innerHTML += `
  //        <tr id="TablaPacientes" class="thead-light">
  //            <td>${aPacientes.apellido + " " + aPacientes.nombre}</td>
  //            <td>${aPacientes.edad}</td>
  //            <td>${aPacientes.documento}</td>
  //        </tr>
  //        `;

  //    };}  
}
=======
>>>>>>> dec00842c9ee98fd8cfc492d0d6060f81092fb82
