function hideModalRecover() {
    $('#indexModal').modal("hide");
    $('#modalrecover').modal("show");
}
function hideModalpp() {
    $('#ppmodal').modal("hide");
    
    
}
function recoverPass() {
    Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Mensaje enviado',
    showConfirmButton: false,
    timer: 5500
  })}
  // const usuarios = [{ DNI: 28721218, pass: "1234" }]
  function validation4Patient() {
    const usuarios = JSON.parse(localStorage.getItem("Pacientes"))    
  let dniHtml = document.querySelector("#DNI")
  let passHtml = document.querySelector("#passPatient")
  for(let index = 0; index < usuarios.length; index++) {
    const usuario = usuarios[index];
    let usuariologueado = {
      id : usuario.documento,
      nombre : usuario.nombre,
      apellido : usuario.apellido
    }

    if (dniHtml.value == usuario.documento) {
      if (passHtml.value == usuario.password) {
        alert("Inicio exitoso")
        localStorage.setItem("usuariologueado", JSON.stringify(usuariologueado))


        return
      }
      alert("La contraseña no coincide")
      return
    }
    
  }
  alert("El DNI no esta registrado")
}
  

function validation4Profesional() {
  const profesionales = JSON.parse(localStorage.getItem("Doctor"))
  let cuitHtml = document.querySelector("#cuit")
  let passprofHtml = document.querySelector("#passProf")
  for(let index = 0; index < profesionaless.length; index++) {
    const profesional = profesionales[index];
    if (cuitHtml.value == profesional.cuil) {
      if (passprofHtml.value == profesional.pass) {
        alert("Iniciando sesion")
        return
      }
      alert("La contraseña no coincide")
      return
    }    
  }
  alert("El CUIT no esta registrado")
}

// function consultaTurnoPaciente (){
//   const usuarioClinica = JSON.parse(localStorage.getItem("Pacientes"))
//   $('#modalPacienteSesion').modal("show");
// }
// function pacienteProfesional (){
//   $('#modalProfesionalSesion').modal("show");

// }



//testing//

const pacientesForTesting = JSON.parse(localStorage.getItem("usuariologueado"));
const usuarioForTesting = pacientesForTesting;


    let userLogued= {
	id : usuarioForTesting.documento,
	nombre : usuarioForTesting.nombre,
	apellido : usuarioForTesting.apellido,
  // turno: usuarioForTesting.turno,
  turno: '25 de Marzo de 2020',
  hora: '20:00',
  turnoTesting:'20:00 - 21:00',
	// doctor: usuarioForTesting.doctor,
  doctor: 'Juan Alonso',
}


function consultaTurnoPaciente (){
  if (pacientesForTesting !== []){
    if(pacientesForTesting.turnoTesting ==''){
      $('#modalPacienteSesion').modal("show");
      var testingModalSinTurnos = `
            <h1>Bienvenido, ${userLogued.nombre}</h1>
            <br>
            <p>Usted no tiene turnos asignados.</p>
            <p>Puede solicitar un turno haciendo click en el botón Solicitar Turno</p>
            </div>
            `
            modalPacienteLogueado.innerHTML = testingModalSinTurnos;
          }else{
            $('#modalPacienteSesion').modal("show");
            var testingModalConTurnos = `
                  <h1>Bienvenido, ${userLogued.nombre}</h1>
                  <br>
                  <p>Usted turno el día ${userLogued.turno}.a las ${userLogued.turnoTesting} Hs</p>
                  <p>con el doctor ${userLogued.doctor}</p>
                  <p> Por favor, llegue 15 min antes de su turno asignado
                  </div>
                  `
                  modalPacienteLogueado.innerHTML = testingModalConTurnos;
                }
          }

// let modalDataPaciente = document.getElementById('modalPacienteLogueado')
// $('#modalPacienteSesion').modal("show");

}
function pacienteProfesional (){
  $('#modalProfesionalSesion').modal("show");

}