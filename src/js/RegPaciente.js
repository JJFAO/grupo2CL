
function getRegisterPac (){
  let inputTest = document.getElementById("formPaciente").checkValidity();
  if (inputTest !== true){
   $('#modalFaltanDatos').modal('show')
  }else{
 
  const entrada = document.querySelectorAll('.datoPac');
  const registroPac = {};
  const pacienteLink = document.getElementById("pacientes");
    $('#modalRegistrado').modal('show')
    entrada.forEach((datoPac) => { 
    registroPac[datoPac.id] = datoPac.value
    window.location.href(pacienteLink)
  });
  const nPacientes = JSON.parse(localStorage.getItem('Pacientes')) || [];
    nPacientes.push(registroPac);
  localStorage.setItem('Pacientes',JSON.stringify(nPacientes)); 
 
}
}


document.getElementById("formPaciente").addEventListener("submit", (e) => {
 e.preventDefault();
 formPaciente.reset();
  });

  function errorEnvio(){
      $('#modalError').modal('show');
  }
  
  function newDoc() {
    window.location.assign("./../../index.html")
  }