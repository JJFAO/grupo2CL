
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
  });
  registroPac.autorizado = 'Pendiente'
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
    window.location.assign("index.html")
  }
  function sendTXT() {
    let messajeError = document.getElementById("errorEnvioTXT").value;
    // console.log(messajeError);
    // const txtError = document.querySelectorAll('.errorEnvioTXT');
    const registroErrores ={};
    const nRegistros = JSON.parse(localStorage.getItem('RegistroDeErrores')) || [];
    nRegistros.push(messajeError);
  localStorage.setItem('RegistroDeErrores',JSON.stringify(nRegistros)); 
  messajeError.reset();
}
  