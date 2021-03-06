const paciente = JSON.parse(localStorage.getItem("Pacientes")) || [];
let apellPac = document.querySelector("#apellido");
let nombPac = document.querySelector("#nombre");
let edadPac = document.querySelector("#edad");
let dni = document.querySelector("#documento")

  function cargarPacientes() {
    const tablaPacientes = document.getElementById("paciente");
    tablaPacientes.innerHTML = ''
    for (let i = 0; i < paciente.length; i++) {
      const aPacientes = paciente[i];
      tablaPacientes.innerHTML += `
        <tr id="" class="thead-light">
            <td>${aPacientes.apellido + " " + aPacientes.nombre}</td>
            <td>${aPacientes.edad}</td>
            <td>${aPacientes.documento}</td>
            <td class="aprobadosP"> ${aPacientes.autorizado} </td>
            <td class="d-flex flex-nowrap justify-content-center"><button id= ${aPacientes.documento} class="check2 text-success border-0 bg-light" onclick="confirmadoPac(this)">
            ✔
          </button>
          <button id=${aPacientes.documento} class="check2 text-danger border-0 bg-light" onclick="rechazadoPac(this)">
            ❌
          </button>
          </td>
        </tr>
        `;
    }
  }

  
  function getLocal(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  document.addEventListener('load', cargarPacientes())