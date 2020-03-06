const paciente = [
    {nombre: 'Mariano', apellido: ' De Filippo', dni: '', edad: '', doctor: '', turno:''},
    {nombre: 'Jj', apellido: '', dni: '', edad: '', doctor: ''},
    {nombre: 'Maria',apellido: '', dni: '', edad: '', doctor: ''},
    {nombre: 'Franco', apellido: '', dni: '', edad: '', doctor: ''},
    {nombre: 'Josefina', apellido: '', dni: '', edad: '', doctor: ''},
    ]
  function cargarPacientes() {
      console.log(paciente);
      
  //   const doctores = getLocal("rDoctores");
    const tablaPacientes = document.getElementById("paciente");
    tablaPacientes.innerHTML = ''
    for (let i = 0; i < paciente.length; i++) {
      const aPacientes = paciente[i];
      tablaPacientes.innerHTML += `
        <tr id="" class="thead-light">
            <td>${aPacientes.nombre+aPacientes.apellido}</td>
            <td>${aPacientes.edad}</td>
            <td>${aPacientes.dni}</td>
            <td>${aPacientes.doctor}</td>
            <td>${aPacientes.turno}</td>
            <td><button class="check2 text-success border-0 bg-light">
            ✔
          </button>
          <button class="check2 text-success border-0 bg-light">
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