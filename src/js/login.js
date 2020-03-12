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
    // position: 'top-center',
    icon: 'success',
    title: 'Mensaje enviado',
    showConfirmButton: false,
    timer: 3000   
    })}
  
    function inicioExitoso() {
      Swal.fire({
      // position: 'top-center',
      icon: 'success',
      title: 'Inicio exitoso',
      showConfirmButton: false,
      timer: 3000   
      })} 
      function errorCuilPass() {
        Swal.fire({
        // position: 'top-center',
        icon: 'error',
        title: 'Las credenciales no son correctas',
        showConfirmButton: false,
        timer: 3000   
        })}
        function cuilNoregis() {
          Swal.fire({
          // position: 'top-center',
          icon: 'warning',
          title: 'El CUIL no esta registrado',
          showConfirmButton: false,
          timer: 3000   
          })}
          function dniNoregis() {
            Swal.fire({
            // position: 'top-center',
            icon: 'warning',
            title: 'El DNI no esta registrado',
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
        window.location.href = "index.html"  
        localStorage.setItem("usuariologueado", JSON.stringify(usuariologueado));
        return
      }
      errorCuilPass()
      
      return
    }
    
  }
  dniNoregis()
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
          errorCuilPass()
          return
        }    
      }
      cuilNoregis()
      
    }
    
    function consultaTurnoPaciente (){
      const usuarioClinica = JSON.parse(localStorage.getItem("Pacientes"))
      $('#modalPacienteSesion').modal("show");
    }

    function pacienteProfesional (){
      $('#modalProfesionalSesion').modal("show");
    }

// function enterFuncionando(){
//   if($("#indexModal").hasClass("show"));
//   console.log("hola")
//   $(document).keypress(function(e){
//      (e.which == 13)
//         $("#ingresarASesion").click();
    
// });
// }
// enterFuncionando();
// Get the input field
let input = document.querySelector("#indexModal");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("ingresarASesion").click();
  }
});