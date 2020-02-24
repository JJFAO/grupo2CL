
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

let provincias={
  
  buenosAires:  ['25 De Mayo', '9 De Julio','Acevedo ','Adolfo Alsina','Adolfo Gonzales Chaves ','Adrogue ','Alberti ','Aldo Bonzi','Alejandro Korn ','Ameghino','America','Arrecifes ','Arribeños ','Ascension ','Avellaneda ','Ayacucho','Azul ','Bahia Blanca','Balcarce','Banderalo ','Banfield ','Banfield','Baradero','Barker ','Batan','Beccar','Bella Vista','Benito Juarez ','Berazategui','Berisso','Bernal','Blaquier','Bolivar','Bonifacio ','Boulogne ','Bragado ','Brandsen','Buenos Aires','Burzaco','Cabildo','Cacharí ','Campana','Campo De Mayo ','Cañada Seca ','Cañuelas','Capilla Del Señor','Capitan Sarmiento','Carhue ','Carlos Casares','Carlos Tejedor','Carmen De Areco ','Carmen De Patagones','Casbas ','Caseros ','Castelar ','Castelli','Chacabuco','Chascomus ','Chillar ','Chivilcoy ','City Bell','Ciudadela','Claromeco ','Claypole','Colon','Com. Otamendi ','Conesa ','Copetonas ','Coronel Charione','Coronel Dorrego ','Coronel Granada ','Coronel Pringles','Coronel Suarez','Coronel Vidal ','Ctro.Agricola El Pato','Daireaux','De La Garma ','Del Viso','Derqui ','Dock Sud ','Dolores','Don Torcuato','Dudignae','El Palomar ','El Talar','Elvira (Lobos) Ba','Emilio V. Bunge ','Ensenada','Escobar','Estacion Carabelas','Ezeiza','Ezpeleta ','Florencio Varela ','Florida','Francisco Alvarez ','Francisco Madero','Garin ','General Alvear','General Arenales','General Belgrano','General Conesa','General Daniel Cerri ','General Guemes ','General Guido ','General Lamadrid','General Las Heras','General Lavalle ','General Madariaga ','General O\'Brien ','General Pacheco','General Pinto ','General Piran ','General Rodriguez','Generalvillegas ','Glew','Gobernador Castro ','Gonzalez Catan ','Gral. Sarmiento ','Gran Bourg ','Gregorio De Laferrere ','Guernica ','Guillermo E. Hudson','Haedo ','Henderson ','Hilario Ascasubi','Hinojo ','Huanguelen','Hurlingham ','Indio Rico','Ing. Allan','Ingeniero Budge','Ingeniero White ','Iriarte','Isidro Casanova','Ituzaingo','Jose C. Paz','Jose Leon Suarez ','Juan B. Alberdi ','Juan Couste ','Juan Jose Paso','Juan Maria Gutierrez ','Junin ','Junin','La Emilia ','La Plata','La Salada ','Lanus ','Laprida','Las Flores','Las Toninas ','Libertad ','Lima ','Lincoln','Lisandro Olmos','Llavallol','Loberia ','Loberia','Lobos','Loma Hermosa','Loma Negra','Lomas De Zamora','Lomas Del Mirador','Longchamps ','Los Polvorines','Los Toldos','Luis Guillon ','Lujan ','M. H. Alfonso Urquiza','Magdalena','Maipu','Manuel B. Gonnet ','Manuel Ocampo ','Mar De Ajo','Mar Del Plata','Marcos Paz ','Mariano Acosta ','Martinez ','Mayor Buratovich','Mechongue ','Medanos','Melchor Romero ','Mercedes','Merlo ','Miramar','Monte Chingolo','Monte Grande ','Monte Hermoso ','Monte','Moreno ','Moron ','Munro ','Navarro','Necochea','Nicanor Olivera ','Norberto De La Riestra ','O\'Higgins ','Olavarria ','Olivos','Open Door ','Orense ','Oriente','Parque San Martin','Paso Del Rey ','Pasteur','Pedernales','Pedro Luro','Pehuajo','Pellegrini','Perez Millán','Pergamino ','Pigue','Pila ','Pilar','Pinamar','Pirovano','Pontevedra','Puan ','Puerto Belgrano','Punta Alta','Quequen','Quilmes Oeste ','Quilmes','Quiroga','Rafael Calzada','Rafael Castillo','Ramallo','Ramos Mejia','Rancagua','Ranchos','Ranelagh','Rauch','Rawson ','Remedios De Escalada','Rivera ','Roberts','Rojas','Roque Perez ','Saavedra','Saenz Peña','Saladillo ','Salazar','Saldungaray ','Salliquelo','Salto','San Andres De Giles','San Andres','San Antonio De Areco ','San Antonio De Padua ','San Bernardo','San Cayetano','San Clemente Del Tuyu','San Fernando ','San Francisco Solano ','San Isidro ','San Justo','San Martin ','San Miguel ','San Miguel Del Monte ','San Nicolas ','San Pedro ','San Vicente ','Santa Lucia ','Santa Teresita','Santos Lugares','Sarandi','Sierra Chica','Sierra De La Ventana ','Stroeder','Suipacha','Tablada ','Tandil','Tapalque','Temperley ','Tigre ','Tornquist ','Torres','Tortuguitas','Trenque Lauquen','Tres Algarrobos','Tres Arroyos','Tres Lomas','Tristan Suarez ','Tropezon','Urdampilleta','Valentin Aisina','Vedia','Veronica','Vicente Lopez','Victoria','Villa Adelina ','Villa Ballester','Villa Bosch','Villa Celina','Villa Dominico','Villa Elisa ','Villa Fiandria','Villa Gesell','Villa Iris','Villa Lynch ','Villa Madero ','Villa Martelli','Villa Maza','Villa Moquehua','Villa Ramallo ','Villa Tesei ','Villalonga','Wilde ','Zarate'],
  caba: ['Agronomía','Almagro','Balvanera','Barracas','Belgrano','Boca','Boedo','Caballito','Chacarita','Coghlan','Colegiales','Constitución','Flores','Floresta','Liniers',  'Mataderos','Monserrat','Monte Castro','Nueva Pompeya','Núñez','Palermo','Parque Avellaneda','Parque Chacabuco','Parque Chas','Parque Patricios','Paternal','Puerto Madero','Recoleta','Retiro', 'Saavedra','San Cristóbal','San Nicolás','San Telmo','Vélez Sársfield','Versalles','Villa Crespo','Villa del Parque','Villa Devoto','Villa General Mitre','Villa Lugano',  'Villa Luro','Villa Ortúzar','Villa Pueyrredón','Villa Real','Villa Riachuelo','Villa Santa Rita','Villa Soldati','Villa Urquiza'],
  catamarca:  ['Ambato','Ancasti','Andalgala','Antofagasta de la Sierra','Belen','Capayan','Capital','El Alto','Fray Mamerto Esquiu','La Paz','Paclin','Poman','Santa Maria','Santa Rosa','Tinogasta','Valle Viejo'],
  chaco: ['12 de Octubre','1º de Mayo','2 de Abril','25 de Mayo','9 de Julio','Almirante Brown','Bermejo','Chacabuco','Comandante Fernandez','Fray Justo Santa Maria de Oro','General Belgrano','General Donovan','General Guemes','Independencia','Libertad','Libertador General San Martin','Maipu','Mayor Luis J. Fontana','O\'Higgins','Presidencia de la Plaza','Quitilipi','San Fernando','San Lorenzo','Sargento Cabral','Tapenaga'],
  chubut: ['Biedma','Cushamen','Escalante','Florentino Ameghino','Futaleufu','Gaiman','Gastre','Languiñeo','Martires','Paso de los Indios','Rawson','Rio Senguer','Sarmiento','Tehuelches','Telsen'],
  cordoba: ['Calamuchita','Capital','Colon','Cruz del Eje','General Roca','General San Martin','Ischilin','Juarez Celman','Marcos Juarez','Minas','Pocho','Presidente Roque Saenz Peña','Punilla','Rio Cuarto','Rio Primero','Rio Seco','Rio Segundo','San Alberto','San Javier','San Justo','Santa Maria','Sobremonte','Tercero Arriba','Totoral','Tulumba','Union'],
  corrientes:  ['Bella Vista','Beron de Astrada','Capital','Concepcion','Curuzu Cuatia','Empedrado','Esquina','General Alvear','General Paz','Goya','Itati','Ituzaingo','Lavalle','Mburucuya','Mercedes','Monte Caseros','Paso de los Libres','Saladas','San Cosme','San Luis del Palmar','San Martin','San Miguel','San Roque','Santo Tome','Sauce'],
  entreRios: ['Colon','Concordia','Diamante','Federacion','Federal','Feliciano','Gualeguay','Gualeguaychu','Islas del Ibicuy','La Paz','Nogoya','Parana','San Salvador','Tala','Uruguay','Victoria','Villaguay'],
  formosa: ['Bermejo','Formosa','Laishi','Matacos','Patiño','Pilagas','Pilcomayo','Pirane','Ramon Lista'], 
  jujuy: ['Cochinoca','Dr. Manuel Belgrano','El Carmen','Humahuaca','Ledesma','Palpala','Rinconada','San Antonio','San Pedro','Santa Barbara','Santa Catalina','Susques','Tilcara','Tumbaya','Valle Grande','Yavi'],
  laPampa: ['Atreuco','Caleu Caleu','Capital','Catrilo','Chalileo','Chapaleufu','Chical Co','Conhelo','Curaco','Guatrache','Hucal','Lihuel Calel','Limay Mahuida','Loventue','Maraco','Puelen','Quemu Quemu','Rancul','Realico','Toay','Trenel','Utracan'],
  laRioja: ['Arauco','Capital','Castro Barros','Chamical','Chilecito','Coronel Felipe Varela','Famatina','General Angel V. Peñaloza','General Belgrano','General Juan F.Quiroga','General Lamadrid','General Ocampo','General San Martin','Independencia','Rosario Vera Peñaloza','San Blas de los Sauces','Sanagasta','Vinchina'],
  mendoza: ['25 de Mayo','Apostoles','Cainguas','Candelaria','Capital','Concepcion','El Dorado','General Manuel Belgrano','Guarani','Iguazu','Leandro N. Alem','Libertador General San Martin','Montecarlo','Obera','San Ignacio','San Javier','San Pedro'],
  misiones:  ['Capital','General Alvear','Godoy Cruz','Guaymallen','Junin','La Paz','Las Heras','Lavalle','Lujan de Cuyo','Maipu','Malargue','Rivadavia','San Carlos','San Martin','San Rafael','Santa Rosa','Tunuyan','Tupungato'],
  neuquen: ['Alumine','Añelo','Catan Lil','Chos Malal','Collon Cura','Confluencia','Huiliches','Lacar','Loncopue','Los Lagos','Minas','Ñorquin','Pehuenches','Picun Leufu','Picunches','Zapala'],
  rioNegro: ['25 de Mayo','9 de Julio','Adolfo Alsina','Avellaneda','Bariloche','Conesa','El Cuy','General Roca','Ñorquinco','Pichi Mahuida','Pilcaniyeu','San Antonio','Valcheta'],
  salta: ['Anta','Cachi','Cafayate','Capital','Cerrillos','Chicoana','General Guemes','General Jose de San Martin','Guachipas','Iruya','La Caldera','La Candelaria','La Poma','La Viña','Los Andes','Metan','Molinos','Oran','Rivadavia','Rosario de la Frontera','Rosario de Lerma','San Carlos','Santa Victoria'],
  sanJuan: ['25 de Mayo','9 de julio','Albardon','Angaco','Calingasta','Capital','Caucete','Chimbas','Iglesia','Jachal','Pocito','Rawson','Rivadavia','San Martin','Santa Lucia','Sarmiento','Ullum','Valle Fertil','Zonda'],
  sanLuis: ['Ayacucho','Belgrano','Chacabuco','Coronel Pringles','General Pedernera','Gobernador Dupuy','Junin','La Capital','Libertador General San Martin'],
  santaFe : ['9 de Julio','Belgrano','Caseros','Castellanos','Constitucion','Garay','General Lopez','General Obligado','Iriondo','La Capital','Las Colonias','Rosario','San Cristobal','San Javier','San Jeronimo','San Justo','San Lorenzo','San Martin','Vera'],
  santaCruz: ['Corpen Aike','Deseado','Guer Aike','Lago Argentino','Lago Buenos Aires','Magallanes','Rio Chico'],
  santaFe:  ['9 de Julio','Belgrano','Caseros','Castellanos','Constitucion','Garay','General Lopez','General Obligado','Iriondo','La Capital','Las Colonias','Rosario','San Cristobal','San Javier','San Jeronimo','San Justo', 'San Lorenzo','San Martin','Vera'],
  santiagoDelEstero: ['Aguirre','Alberdi','Atamisqui','Avellaneda','Banda','Belgrano','Capital','Choya','Copo','Figueroa','General Taboada','Guasayan','Jimenez','Juan F. Ibarra','Loreto','Mitre','Moreno','Ojo de agua','Pelegrini','Quebrachos','Rio Hondo','Rivadavia','Robles','Salavina','San Martin','Sarmiento'],
  tierraDelFuego:  ['Antartida Argentina','Islas del Atlantico sur','Rio Grande','Ushuaia'],
  tucuman:  ['Burruyacu', 'Capital',  'Chicligasta',  'Cruz Alta',  'Famalla',  'Graneros',  'Juan B. Alberdi', 'La Cocha',  'Leales',  'Lules',  'Monteros',  'Rio Chico',  'Simoca',  'Tafi del Valle',  'Tafi Viejo', 'Trancas',  'Yerba Buena'],

}

provSelect.addEventListener('change',function(){
  let selectOption = provincias[this.value];
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
  let ciudadPaciente = document.getElementById("seleccionLocalidad").value;
  let provinciaPaciente = document.getElementById("seleccionProvincia").value;
  let cpPaciente = document.getElementById("postalCliente").value;
  let checked = document.getElementById("aceptoTyC").value;
  
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
  console.log(apPaciente)
  console.log(nomPaciente)
  console.log(edPaciente)
  console.log(dniPaciente)
  console.log(nacPaciente)
  console.log(genPaciente)
  console.log(dirPaciente)
  console.log(telFijoPaciente)
  console.log(telMovilPaciente)
  console.log(emailPaciente)
  console.log(ciudadPaciente)
  console.log(provinciaPaciente)
  console.log(cpPaciente)
  console.log(checked)

});

