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
  })
}
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

