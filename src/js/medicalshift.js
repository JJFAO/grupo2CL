var arrayespecialidades = ["Alergología", "Anestesiología", "Bioquímico", "Cardiología", "Cardiología Infantil", "Cirugía Cardiovascular", "Cirugía de Cabeza y Cuello", "Cirugía General", "Cirugía Pediatrica", "Clínica", "Dermatología", "Diagnóstico por Imágenes", "Ecografía", "Emergencia", "Endocrinología", "Endocrinología Infantil", "Flebología Y Linfología", "Gastroenterología", "Gastroenterología Infatil", "Ginecología", "Hematología", "Hemoterapia", "Hemoterapia", "Infectología Infantil", "Inmunología", "Mastología", "Medicina del Deporte", "Medicina General", "Médico", "Nefrología", "Nefrología Infantil", "Neonatología", "Neumonología", "Neumonología Infantil", "Neurocirugía", "Neurocirugía Infantil", "Neurología", "Neurología Infantil", "Nutrición", "Odontología - Endodoncia", "Odontología - Cirugía", "Odontología - Periodoncia", "Odontología General", "Odontopediatría", "Oftalmología", "Oftalmología Infantil", "Oncología", "Oncología Infantil", "Otorrinolaringología", "Otorrinolaringología Infantil", "Pediatría", "Proctología", "Psicología - Niños", "Psicología - Adolescentes - Adultos", "Psiquiatría - Adultos", "Psiquiatría - Infanto Juvenil", "Reumatología", "Reumatología Infantil", "RX - Odontología", "Tocoginecología", "Traumatología", "Traumatología y Ortodopedia", "Traumatología Infantil", "Urología", "Urología Infantil"];
localStorage.setItem('arrayespecialidades', JSON.stringify(arrayespecialidades))
var usuario = {
    nombre: 'jorge',
    id: '00001'
}
// const doctor = new Doctor(nombre, apellido, telefono, especialidad, matricula, cuil, domicilio, provincia, localiad, codigopostal);

const doctores = [{
        nombre: 'María Belén',
        apellido: 'Abraham',
        especialidad: 'Alergología',
        cuil: '000000000000',
        dias: [{
            lunes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
            martes: [],
            miercoles: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
            jueves: [],
            viernes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00']
        }]
    },
    {
        nombre: 'Andrés',
        apellido: 'Anzorena',
        especialidad: 'Cardiología',
        cuil: '11111111111',
        dias: [{
            lunes: [],
            martes: [],
            miercoles: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
            jueves: [],
            viernes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00']
        }]
    },
    {
        nombre: 'Silvina Rita',
        apellido: 'Depetris',
        especialidad: 'Cardiología',
        cuil: '22222222222',
        dias: [{
            lunes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
            martes: [],
            miercoles: ['10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
            jueves: [],
            viernes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00']
        }]
    },
    {
        nombre: 'Silvia Lourdes',
        apellido: 'Lorenzo',
        especialidad: 'Gastroenterología',
        cuil: '3333333333',
        dias: [{
            lunes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
            martes: [],
            miercoles: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
            jueves: [],
            viernes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00']
        }]
    },
    {
        nombre: 'Joel',
        apellido: 'Carabajal',
        especialidad: 'Traumatología',
        cuil: '44444444444',
        dias: [{
            lunes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
            martes: [],
            miercoles: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
            jueves: [],
            viernes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00']
        }]
    }
]


function cargar_select_con_cuil(array, id, prop) {
    const doc_filtrados = (cargador(array))
    const select_limpio = doc_filtrados.map(function (profesional) {
        return profesional[prop]
    })
    addOptions(id, select_limpio);
    console.log(select_limpio);
}

function cargador(array) {
    const doc_filtrados = []
    for (let i = 0; i < array.length; i++) {
        let cuils = array[i];
        for (let k = 0; k < doctores.length; k++) {
            if (doctores[k].cuil == cuils) {
                doc_filtrados.push(doctores[k])
            }
        }
    }
    return doc_filtrados
}

function addOptions(id, array) {
    var select = document.querySelector(id);
    for (let i = select.options.length; i >= 1; i--) {
        select.remove(i);
    }
    for (let j = 0; j < array.length; j++) {
        let option = document.createElement("option");
        option.text = array[j];
        select.add(option);
    }
}


let doctores_filtrados = []
doctores.forEach(doctor => {
    doctores_filtrados.push(doctor.especialidad)
});

let esp_sinRepetidos = doctores_filtrados.filter(function (valor, indiceActual, arreglo) {
    let indiceAlBuscar = arreglo.indexOf(valor);
    if (indiceActual === indiceAlBuscar) {
        return true;
    } else {
        return false;
    }
});

// let especialidades= localStorage.getItem('arrayespecialidades')
//Codigo a Ejecutar al Cargar la Pagina
function myOnLoad() {
    cargar_select(esp_sinRepetidos, '#especialidad')
}

function cargar_select(array, id) {
    // Ordena el Array Alfabeticamente, es muy facil ;)):
    array.sort();
    addOptions(id, array);
}



function filtrar_doctores() {
    const especialidadeshtml = document.querySelector("#especialidad")
    // const doctores1 = JSON.parse(localStorage.getItem("rDoctores"))
    // console.log(doctores1);
    const cuil_filter = []
    for (let i = 0; i < doctores.length; i++) {
        if (doctores[i].especialidad == especialidadeshtml.value) {
            cuil_filter.push(doctores[i].cuil)
        }
    }
    return cuil_filter
}

function cargar_doctores() {
    const array_doc_filt = (cargador(filtrar_doctores("#especialidad", 'especialidad')))
    const name_doc = array_doc_filt.map(function (profesional) {
        return profesional.nombre + " " + profesional.apellido
    });
    cargar_select(name_doc, "#doctores")
}

function select_a_cuil(id, prop) {
    const select_elegido = document.querySelector(id)
    let cuil_filter = ''
    for (let i = 0; i < doctores.length; i++) {
        if (doctores[i][prop] == select_elegido.value) {
            cuil_filter = doctores[i].cuil
        }
    }
    return cuil_filter
}

function dias_disponibles() {
    const doctorhtml = document.querySelector("#doctores")
    const filnombre_y_apellido = (convertir(doctorhtml.value))
    console.log('plis' + filnombre_y_apellido);
    const diasArray = filnombre_y_apellido[0].dias[0] //preguntar ########################################################3
    console.log(diasArray);
    const diasdisponibles = []
    for (const i in diasArray) {
        if (diasArray.hasOwnProperty(i)) {
            const dias = diasArray[i];
            // console.log(dias.length); 
            if (dias.length !== 0) {
                diasdisponibles.push(i)
            }
        }
    }
    return diasdisponibles
}



function cargar_dias() {
addOptions('#dias', dias_disponibles())
}

function convertir(nombre) { // a esta funcion le ingreso el nombre del doctor y me devuelve el objeto doctor
    const namearray = nombre.split(' ');
    console.log(namearray);
            let nombre_doc = ''
        for (let i = 0; i < (namearray.length - 1); i++) {
            if (i == 0) {
                nombre_doc = namearray[0]
            } else {
                nombre_doc = (nombre_doc + ' ' + namearray[i])
            }
        }
        const apellido_doc = namearray[(namearray.length - 1)]
        console.log(apellido_doc);
        console.log(nombre_doc);
        // filtrar doctores por apellido_doc
        const filapellido_doc = doctores.filter(doctor => doctor.apellido == apellido_doc)
        console.log(filapellido_doc);
        // filtro doctores por nombre
        const filnombre_y_apellido = filapellido_doc.filter(doctor => doctor.nombre == nombre_doc)
        console.log(filnombre_y_apellido[0].cuil);
return filnombre_y_apellido 
}

function filtrar_horarios() {
    const day = document.querySelector("#dias").value
    console.log(day);
    const doctorhtml = document.querySelector("#doctores")
    const array = [convertir(doctorhtml.value)[0].cuil]
   console.log( cargador(array)[0].dias[0][day])
  
return cargador(array)[0].dias[0][day]
}

function cargar_horario() {
   const array= filtrar_horarios()
    addOptions("#horario", array)
}

function guardar_turno () {
        const inputs = document.querySelectorAll('.datos');
        const registro = {};
        inputs.forEach((dato) => {
            registro[dato.id] = dato.value
        });
        console.log(registro);

        const nTurnos = JSON.parse(localStorage.getItem('rTurnos')) || [];
        nTurnos.push(registro);
        localStorage.setItem('rTurnos',JSON.stringify(nTurnos))
        return registro
}

function borrar_turno(obj) {
console.log(obj.doctores)
console.log(obj.dias);
console.log(obj.horario);
 console.log(convertir(obj.doctores)[0].cuil) //cuil
}

function confirmar() {
    console.log(document.querySelector("#doctores").value);
    console.log("Seleccione un Profesional...");
    

    
    if (document.querySelector("#doctores").value == "Seleccione un Profesional...") {
      console.log("debe llenar doctoreddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddds");
        
    } else {
        console.log("doctor llenokkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
        
    }

const turno_paciente = guardar_turno()
borrar_turno(turno_paciente)

    alert('confirmado')
}









