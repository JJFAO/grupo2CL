// function getRegisterD() {

//     const inputs = document.querySelectorAll('.datos');
//     const registro = {};
//     inputs.forEach((dato) => {
//         registro[dato.id] = dato.value
//     });
//     console.log(registro);

//     const nDoctores = JSON.parse(localStorage.getItem('rDoctores')) || [];
//     nDoctores.push(registro);
//     localStorage.setItem('rDoctores',JSON.stringify(nDoctores))
// }


// class Doctor {
//     constructor(nombre, apellido, telefono, especialidad, matricula, cuil, domicilio, provincia, localiad, codigopostal) {
//         this.nombre = nombre,
//         this.apellido = apellido,
//         this.telefono = telefono,
//         this.especialidad = especialidad,
//         this.matricula = matricula,
//         this.cuil = cuil,
//         this.pass = pass,
//         this.domicilio = domicilio,
//         this.provincia = provincia,
//         this.localidad = localiad,
//         this.codigopostal = codigopostal,
//         this.horarios = []
//     }
// }

// crear una funcion que llame desde el localStorage a los valores de los objetos creados despues de un registro!
function horariosDoctores(){
    
}







// let Turnos = [
//     { fecha: '2020-02-28 8:00', doctor: "Mariano", paciente: "JJ" },
//     { fecha: '2020-02-27 10:00', doctor: "Mariano", paciente: "JJ" },
//     { fecha: '2020-02-29 8:00', doctor: "Mariano", paciente: "JJ" },
//     { fecha: '2020-02-26 8:00', doctor: "Mariano", paciente: "JJ" },
//     { fecha: '2020-02-29', doctor: "Marco", paciente: "JJ" },
//     { fecha: '2020-02-29', doctor: "Marco", paciente: "JJ" },
// ]
// function myFunction() {
//     const doctor = "Marco"
//     const tablahtml = document.getElementById("tablaHorarios");
//     const turnosDoctor = Turnos.filter((turno) => {return turno.doctor == doctor})
//     console.log(turnosDoctor);
//     const turnosHora = turnosDoctor.filter((turno) => turno.fecha >= "8:00" && turno.fecha )


//     tablahtml.innerHTML = `
//     <tr id="" class="thead-light">
//         <th id="myTr" scope="row" style="width: 60px;">8:00 12:00</th>
//         <td>hola</td>
//         <td></td>
//         <td></td>
//         <td></td>
//         <td></td>
//         <td></td>
//     </tr>
//     `
// }







// const pacientes = [
//     {nombre: 'Mariano De Filippo', edad:'20', dni:'42269845', doctor:'jj', turno:'8:00'},
//     {nombre: 'Jj', edad:'29', dni:'0958475', doctor:'luis', turno:'12:00'},
//     {nombre: 'Maria', edad:'80', dni:'43567876', doctor:'mirta', turno:'10:00'},
//     {nombre: 'Franco', edad:'9', dni:'13326907', doctor:'leandro', turno:'16:00'},
//     {nombre: 'Josefina', edad:'25', dni:'32019283', doctor:'ana', turno:'22:00'},
//     ]
// function cargarPacientes() {
//   const tablaPaciente = document.getElementById("paciente");
//   for (let i = 0; i < pacientes.length; i++) {
//     const paciente = pacientes[i];
//     tablaPaciente.innerHTML += `
//         <tr id="" class="thead-light">
//             <td>${paciente.nombre}</td>
//             <td>${paciente.edad}</td>
//             <td>${paciente.dni}</td>
//             <td>${paciente.doctor}</td>
//             <td>${paciente.turno}</td>
//             <td><button class="check2 text-success border-0 bg-light">
//             ✔
//           </button>
//           <button class="check2 text-success border-0 bg-light">
//             ❌
//           </button>
//           </td>
//         </tr>
//         `
//   }
// }











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
document.addEventListener('load', cargarDoctores())