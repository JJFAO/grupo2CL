
function consultaTurnoPaciente() {
  if (localStorage.getItem('profelogueado') !== null) {
    console.log("Profesional Ok")

    $('#modalPacienteSesion').modal("show");
    // let elimTurno = document.getElementById('elimiTurno').style.visibility = "collapse";
    // let solicTurno = document.getElementById('soliciTurno').style.visibility = "collapse";


     function cargarListaPaciente() {
      const turnosDoctor = JSON.parse(localStorage.getItem("rTurnos")) || [];
      const docLogueado = JSON.parse(localStorage.getItem('profelogueado'));
    
    const mapDelTurno = turnosDoctor.filter(function(turnoDelDia){
    return turnoDelDia.doctores === docLogueado.id
    })
    
    var testingModalSinLog = `
  <h1 class="textoProfesional" id="profesionales">Buen día, ${docLogueado.nombre}</h1>
  <p> Sus pacientes del día son: </p>
   <div id="tablaPacientes" class="table-responsive-sm">
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

  } 
  else if (localStorage.getItem('usuariologueado') === null) {

    console.log("No inicio Sesión")

    $('#modalPacienteSesion').modal("show");
    var testingModalSinLog = `
            <h1>¡Hola!</h1>
            <br>
            <p>Por favor, Inicie Sesión .</p>
            <p>para gestionar sus datos</p>
            </div>
            `
    modalPacienteLogueado.innerHTML = testingModalSinLog;
  } 
  else if (localStorage.getItem('rTurnos') !== null) {

    $('#modalPacienteSesion').modal("show");
    console.log("Inició PAciente")

    const logueoForTesting = JSON.parse(localStorage.getItem('usuariologueado'));
    const pacientesForTestings = JSON.parse(localStorage.getItem("rTurnos"))|| [];
    const doctoresForTestings = JSON.parse(localStorage.getItem("rDoctores"));
    //validation for pacients//
    const modalACargar = pacientesForTestings.find(function (pacienteForTest) {
      return pacienteForTest.dniPac == logueoForTesting.id;
    })
    if (modalACargar === undefined){
      console.log("Paciente sin turnos x eliminado")
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
    } else{

      const logueoForTesting = JSON.parse(localStorage.getItem('usuariologueado'));
      const pacientesForTestings = JSON.parse(localStorage.getItem("rTurnos"))|| [];
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
      }
  
  
  
      $('#modalPacienteSesion').modal("show");
  
      var testingModalConTurnos = `
          <h1>Hola, ${userLogued.nombre} ${userLogued.apellido}</h1>
          <br>
          <p>Usted tiene turno el día </p>
           <div id="tablaDeTurnos" class="table-responsive-sm">
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
          </div>
          `
      modalPacienteLogueado.innerHTML = testingModalConTurnos;
  
      const mapDelNoTurno = pacientesForTestings.filter(function(turnosDelDia){
        return turnosDelDia.dniPac !== logueoForTesting.id
        })
     
      
      const mapDelTurno = pacientesForTestings.filter(function(turnosDelDia){
      return turnosDelDia.dniPac === logueoForTesting.id
      })
  
      for (let i = 0; i < mapDelTurno.length; i++) {
        const turnos = mapDelTurno[i];
        var listadoTurnos = `
        <tbody>
  
          <td> ${turnos.dias}</td>
          <td>${turnos.horario}</td>
          <td>${turnos.especialidad}</td>
          <td>${cuilDoctor.nombre} ${cuilDoctor.apellido}</td>
          <td> <button id= "deleteEsteTurno" onclick="borra_este('${turnos.doctores}', '${turnos.dniPac}','${turnos.dias}','${turnos.horario}' )" class="check2 text-danger border-0 bg-light">❌</button></td>       
        </tr>
        </tbody>
        `
        listTurnos.innerHTML +=listadoTurnos;
      }
    



    }   

 
  }else{
    
    console.log("Inició PAciente, no tiene turnos")

    $('#modalPacienteSesion').modal("show");

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
  }


}

function borra_este(doctores, dniPac, dias, horario) {
  console.log(localStorage.getItem("rTurnos"));
  const rTurnos = JSON.parse(localStorage.getItem("rTurnos")) || [];
  console.log(rTurnos[0]);
  const rTurnos_modif= []

  for (let i = 0; i < rTurnos.length; i++) {
    const turno = rTurnos[i];
    if (
      turno.horario === horario &&
      turno.dias === dias &&
      turno.doctores === doctores &&
      turno.dniPac === dniPac
    ) {
    } else {
      rTurnos_modif.push(turno);
      console.log("no");      
    }
  }
  console.log(rTurnos_modif);
  localStorage.setItem('rTurnos', JSON.stringify(rTurnos_modif))
  $("#modalPacienteSesion").modal("hide");
}

// let botonDeleteTurno = document.querySelector("#elimiTurno");
// let eliminarTurno = false;

// if (botonDeleteTurno) {
//   botonDeleteTurno.addEventListener("click", deleteTurno);
//   function deleteTurno() {
//     if (eliminarTurno == false);
//     localStorage.removeItem("rTurnos");
//     // localStorage.removeItem("rTurnos");
//     window.location.assign("index.html");
//   }
// }

