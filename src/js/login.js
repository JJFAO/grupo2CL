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
    timer: 3000   
    })}
  
    function inicioExitoso() {
      Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Inicio exitoso',
      showConfirmButton: false,
      timer: 3000   
      })} 

  function validation4Patient() {
    event.preventDefault()
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
        $('#indexModal').modal("hide");
        inicioExitoso()       
        localStorage.setItem("usuariologueado", JSON.stringify(usuariologueado));
        return
      }
      alert("Las credenciales no son correctas")
      return
    }
    
  }
  alert("El DNI no esta registrado")
}
// localStorage.setItem("proflogueado", JSON.stringify(proflogueado));

function validation4Profesional() {
  const profesionales = JSON.parse(localStorage.getItem("rDoctores"))
  let cuilHtml = document.querySelector("#cuil")
  let passprofHtml = document.querySelector("#passProf")   
  for(let index = 0; index < profesionales.length; index++) {
    const profesional = profesionales[index];  
    if (cuilHtml.value == profesional.cuil) {            
      if (passprofHtml.value == profesional.passProf) {  
         if (profesional.cuil == 20287212187 && profesional.passProf == 1234) {           
          window.location.href="./admin-section.html"       
              } 
              inicioExitoso()
          localStorage.setItem("proflogueado", JSON.stringify(proflogueado));
          // window.location.href = 'index.html';
            return
          }
          alert("La credenciales no son correctas")
          return
        }    
      }
      alert("El CUIL no esta registrado")
      
    }
    
    function consultaTurnoPaciente (){
      const usuarioClinica = JSON.parse(localStorage.getItem("Pacientes"))
      $('#modalPacienteSesion').modal("show");
    }

    function pacienteProfesional (){
      $('#modalProfesionalSesion').modal("show");
    }
    

