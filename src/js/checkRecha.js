// funcion que aprueba doctores
function rechazarDoc(element) {
    const resultadoNo = element.closest("tr").querySelector(".aprobado");
    resultadoNo.innerHTML = `No`;
    const doctores = JSON.parse(localStorage.getItem("rDoctores"));
    const posicionDoc = doctores.findIndex(
      doctor => element.id == doctor.matriculaP
    );
    console.log(element)
    doctores[posicionDoc].autorizado = `No`;
    localStorage.setItem("rDoctores", JSON.stringify(doctores));
  }
  
  
  // funcion que aprueba pacientes
  function rechazadoPac(element) {
    const resultadoPacNo = element.closest("tr").querySelector(".aprobadosP");
    resultadoPacNo.innerHTML = `No`;
    const pacientes = JSON.parse(localStorage.getItem("Pacientes"));
    const posicionPac = pacientes.findIndex(
      aPacientes => element.id == aPacientes.documento);
    pacientes[posicionPac].autorizado = `No`
    localStorage.setItem('Pacientes', JSON.stringify(pacientes));
  }
  