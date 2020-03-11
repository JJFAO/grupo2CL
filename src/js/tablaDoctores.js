function cargarDoctores() {
  const doctores = JSON.parse(localStorage.getItem("rDoctores"));
  const tablaDoctor = document.getElementById("doctores");
  let selectDoctors = document.querySelector("#cargaDoc");
  tablaDoctor.innerHTML = "";
  for (let i = 0; i < doctores.length; i++) {
    const doctor = doctores[i];
    tablaDoctor.innerHTML += `<tr id="" class="thead-light">
      <td>${doctor.nombre + " " + doctor.apellido}</td>
      <td>${doctor.especialidad}</td>
      <td>${doctor.matriculaP}</td>
      <td class="aprobado"> ${doctor.autorizado} </td>
      <td class="d-flex flex-nowrap justify-content-center"><button id="${
        doctor.matriculaP
      }" class="check2 text-success border-0 bg-light" onclick="confirmarDoc(this)">
        ✔
      </button>
      <button id= "${
        doctor.matriculaP
      }" class="check2 text-danger border-0 bg-light" onclick="rechazarDoc(this)">
        ❌
      </button>
      </td>
    </tr>`;

    selectDoctors.innerHTML += `<option value = "${doctor.matriculaP}">${doctor.nombre +
      " " +
      doctor.apellido}</option>`;
  }
}
document.addEventListener("load", cargarDoctores());
