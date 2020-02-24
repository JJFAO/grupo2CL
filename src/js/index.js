
// function cargaProvincias(){
//   let listProvincias = document.getElementById('seleccionProvincia');
  
//   let provincias = ["Buenos Aries","Catamarca","Chaco","Chubut","Córdoba","Corrientes",
//   "Entre Ríos","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquén","Río Negro",
//   "Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego",
//   "Tucumán"];

// for (let i = 0; i < provincias.length ; i++){
//   let opt = document.createElement('option');
//   opt.innerHTML = provincias[i];
//   listProvincias.appendChild(opt);
// }
// }
// cargaProvincias();

function cargaLocalidades(){
  let provSelect = document.getElementById('seleccionProvincia');
  let listLocalidad = document.getElementById('seleccionLocalidad');

let provinciasTest={
  tucuman: ['Burruyacu', 'Capital',  'Chicligasta',  'Cruz Alta',  'Famalla',  'Graneros',  'Juan B. Alberdi', 'La Cocha',  'Leales',  'Lules',  'Monteros',  'Rio Chico',  'Simoca',  'Tafi del Valle',  'Tafi Viejo', 'Trancas',  'Yerba Buena'],
  buenosAires: ['CABA'],
  cordoba: ['Cordoba', 'Rio Cuarto', 'Carlos Paz'],
}

provSelect.addEventListener('change',function(){
  let selectOption = provinciasTest[this.value];
  while (listLocalidad.options.length > 0){
    listLocalidad.options.remove(0);
  }

  Array.from(selectOption).forEach(function(el){
    let option = new Option(el, el);
    listLocalidad.appendChild(option);
  });
});

//     const localidades = [tucuman, buenosAires, cordoba];

// for (let i=0; i<localidades.length; i++){
//   let testLocalidades = localidades.toString()
//   console.log(testLocalidades)

//   let opt =document.createElement('option');
//     opt.innerHTML = localidades[i];
//   listLocalidad.appendChild(opt);
// }

}
cargaLocalidades();
// function cargaLocalidades(){
//   for (let i = 0; i < listLocalidad.length; i++){
//     let opt = document.createElement('option');
//     opt.innerHTML = localidades[i];
//     listLocalidad.appendChild(opt);
//     console.log(opt)
//     }
  
// }
// cargaLocalidades();




let d = new Date();
let t = d.getTime();
let datareg = t + 1;
var database = firebase.database()


document.getElementById("formPaciente").addEventListener("submit", (e) => {

  let apPaciente = document.getElementById("apellidoPaciente").value;
  let nomPaciente = document.getElementById("nombrePaciente").value;
  let edPaciente = document.getElementById("edadPaciente").value;
  let dniPaciente = document.getElementById("documentoDNI").value;
  let nacPaciente = document.getElementById("nacimientoPaciente").value;
  let genPaciente = document.getElementById("idSexoCliente").value;
  let dirPaciente = document.getElementById("domicilioPaciente").value;
  let telFijoPaciente = document.getElementById("telefonoFijoCliente").value;
  let telMovilPaciente = document.getElementById("telefonoMovilCliente").value;
  let emailPaciente = document.getElementById("emailPaciente").value;
  let ciudadPaciente = document.getElementById("localidadPaciente").value;
  let provinciaPaciente = document.getElementById("seleccionProvincia").value;
  let cpPaciente = document.getElementById("postalCliente").value;

  e.preventDefault();

  //   function firebasePaciente(){

  //     console.log(datareg);
  //     datareg= datareg+1;
  //     console.log(datareg);

  //     const obj = {
  //     id: datareg,
  //     Apellido: apPaciente,
  //     Nombre: nomPaciente,
  //     Edad: edPaciente,
  //     Documento: dniPaciente,
  //     FechaNacimiento: nacPaciente,
  //     Genero: genPaciente,
  //     Dirección: dirPaciente,
  //     TelFijo: telFijoPaciente,
  //     TelMovil: telMovilPaciente,
  //     email: emailPaciente,
  //     ciudad: ciudadPaciente,
  //     Provincia: provinciaPaciente,
  //     CodPostal: cpPaciente,
  //   }
  //   console.log(obj)
  //   let db = firebase.database().ref("obj/"+datareg);
  //   db.set(obj);
  // }

  // firebasePaciente()
  formPaciente.reset();

});

