// funcion que aprueba doctores
function confirmarDoc(element) {
  const resultadoSi = element.closest("tr").querySelector(".aprobado");
  resultadoSi.innerHTML = ` Si `;
  const doctores = JSON.parse(localStorage.getItem("rDoctores"));
  const posicionDoc = doctores.findIndex(
    doctor => element.id == doctor.matriculaP
  );
  doctores[posicionDoc].autorizado = "Si";
  localStorage.setItem("rDoctores", JSON.stringify(doctores));
}


// funcion que aprueba pacientes
function confirmadoPac(element) {
  const resultadoPacSi = element.closest("tr").querySelector(".aprobadosP");
  resultadoPacSi.innerHTML = ` Si `;
  const pacientes = JSON.parse(localStorage.getItem("Pacientes"));
  const posicionPac = pacientes.findIndex(aPacientes => element.id == aPacientes.documento);
  pacientes[posicionPac].autorizado = 'Si'
  localStorage.setItem('Pacientes', JSON.stringify(pacientes));
}
