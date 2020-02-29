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

  const profesionales = [{ cuit: 28721218, pass: "1234" }]
function validation4Profesional() {
  let cuitHtml = document.querySelector("#cuit")
  let passprofHtml = document.querySelector("#passProf")
  for(let index = 0; index < profesionales.length; index++) {
    const profesional = profesionales[index];
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