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
        localStorage.setItem("usuariologueado", usuariologueado)
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

function consultaTurnoPaciente (){
  const usuarioClinica = JSON.parse(localStorage.getItem("Pacientes"))
  $('#modalPacienteSesion').modal("show");
}
function pacienteProfesional (){
  $('#modalProfesionalSesion').modal("show");

}