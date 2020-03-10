const doctores = JSON.parse(localStorage.getItem("rDoctores"));
let nomb = document.querySelector("#nombre");
let apell = document.querySelector("#apellido");
let especia = document.querySelector("#Especialidad");
let matricula = document.querySelector("#matriculaP");

function cargarDoctores() {
//   const doctores = getLocal("rDoctores");
  const tablaDoctor = document.getElementById("doctores");
  let selectDoctors = document.querySelector("#cargaDoc");
  tablaDoctor.innerHTML = '';
  for (let i = 0; i < doctores.length; i++) {
    const doctor = doctores[i];
    tablaDoctor.innerHTML += 
    `<tr id="" class="thead-light">
      <td>${doctor.nombre + " " + doctor.apellido}</td>
      <td>${doctor.Especialidad}</td>
      <td>${doctor.matriculaP}</td>
      <td class="aprobado"> - </td>
      <td><button id="checkAprob2" class="check2 text-success border-0 bg-light" onclick="confirmarDoc()">
        ✔
      </button>
      <button id="checkRecha1" class="check2 text-danger border-0 bg-light" onclick="rechazarDoc()">
        ❌
      </button>
      </td>
    </tr>`;

    selectDoctors.innerHTML += `<option>${doctor.nombre + " " + doctor.apellido}<option>`; 
  }
}

document.addEventListener('load', cargarDoctores())