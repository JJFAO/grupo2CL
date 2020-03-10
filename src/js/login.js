function hideModalRecover() {
    $('#indexModal').modal("hide");
    console.log("hola");
    
    $('#modalrecover').modal("show");
    console.log("chau");
    
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
        localStorage.setItem("usuariologueado", JSON.stringify(usuariologueado));
        return
      }
      alert("Las credenciales no son correctas")
      return
    }
    
  }
  alert("El DNI no esta registrado")
}
  

function validation4Profesional() {
  const profesionales = JSON.parse(localStorage.getItem("rDoctores"))
  let cuitHtml = document.querySelector("#cuit")
  let passprofHtml = document.querySelector("#passProf")
  for(let index = 0; index < profesionales.length; index++) {
    const profesional = profesionales[index];
    if (cuitHtml.value == profesional.cuit) {
            
      if (passprofHtml.value == profesional.passProf) {
        localStorage.setItem("proflogueado", JSON.stringify(proflogueado));
        alert("Inicio exitoso")
        return
      }
      alert("La credenciales no son correctas")
      return
    }    
  }
  alert("El CUIT no esta registrado")
}
