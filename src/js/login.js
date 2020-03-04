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
  const usuarios = [{ DNI: 28721218, pass: "1234" }]
function validation4Patient() {
  let dniHtml = document.querySelector("#DNI")
  let passHtml = document.querySelector("#passPatient")
  for(let index = 0; index < usuarios.length; index++) {
    const usuario = usuarios[index];

    if (dniHtml.value == usuario.DNI) {
      if (passHtml.value == usuario.pass) {
        alert("Iniciando sesion")
        return
      }
      alert("La contraseña no coincide")
      return
    }
    
  }
  alert("El DNI no esta registrado")
}
  const profesionaless = [{ cuit: 28721218, pass: "1234" }]
  const pacientess = 

function validation4Profesional() {
  let cuitHtml = document.querySelector("#cuit")
  let passprofHtml = document.querySelector("#passProf")
  for(let index = 0; index < profesionaless.length; index++) {
    const profesional = profesionaless[index];
    if (cuitHtml.value == profesional.cuit) {
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
  console.log(usuarioClinica)  
  $('#modalPacienteSesion').modal("show");
}
function pacienteProfesional (){
  $('#modalProfesionalSesion').modal("show");

}