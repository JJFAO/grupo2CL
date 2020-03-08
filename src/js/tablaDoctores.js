const doctores = [
  {nombre: 'Mariano', apellido: ' De Filippo', especialidad: '', matricula: ''},
  {nombre: 'Jj', apellido: '', especialidad: '', matricula: ''},
  {nombre: 'Maria',apellido: '', especialidad: '', matricula: '' },
  {nombre: 'Franco', apellido: '', especialidad: '', matricula: ''},
  {nombre: 'Josefina', apellido: '', especialidad: '', matricula: ''},
  ]
function cargarDoctores() {
    console.log(doctores);
//   const doctores = getLocal("rDoctores");
  const tablaDoctor = document.getElementById("doctores");
  tablaDoctor.innerHTML = ''
  for (let i = 0; i < doctores.length; i++) {
    const doctor = doctores[i];
    tablaDoctor.innerHTML += `
      <tr id="" class="thead-light">
          <td>${doctor.nombre+doctor.apellido}</td>
          <td>${doctor.especialidad}</td>
          <td>${doctor.matricula}</td>
          <td><button id="checkAprob2" class="check2 text-success border-0 bg-light">
          ✔
        </button>
        <button id="checkRecha1" class="check2 text-success border-0 bg-light">
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
document.addEventListener('load', cargarDoctores())