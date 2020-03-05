var arrayespecialidades = ["ALERGOLOGIA", "ANESTESIOLOGIA", "BIOQUIMICO", "CARDIOLOGIA", "CARDIOLOGIA INFANTIL", "CIRUGIA CARDIOVASCULAR", "CIRUGIA DE CABEZA Y CUELLO", "CIRUGIA GENERAL", "CIRUGIA PEDIATRICA", "CLINICA", "DERMATOLOGIA", "DIAGNOSTICO POR IMAGENES", "ECOGRAFIA", "EMERGENCIA", "ENDOCRINOLOGIA", "ENDOCRINOLOGIA INFANTIL", "FLEBOLOGIA Y LINFOLOGIA", "GASTROENTEROLOGIA", "GASTROENTEROLOGIA INFANTIL", "GINECOLOGIA", "HEMATOLOGIA", "HEMOTERAPIA", "HEMOTERAPIA", "INFECTOLOGIA INFANTIL", "INMUNOLOGIA", "MASTOLOGIA", "MEDICINA DEL DEPORTE", "MEDICINA GENERAL", "MEDICO", "NEFROLOGIA", "NEFROLOGIA INFANTIL", "NEONATOLOGIA", "NEUMONOLOGIA", "NEUMONOLOGIA INFANTIL", "NEUROCIRUGIA", "NEUROCIRUGIA INFANTIL", "NEUROLOGIA", "NEUROLOGIA INFANTIL", "NUTRICION", "ODONTOLOGIA - ENDODONCIA ", "ODONTOLOGIA -CIRUGIA", "ODONTOLOGIA -PERIODONCIA", "ODONTOLOGIA GENERAL", "ODONTOPEDIATRIA", "OFTALMOLOGIA", "OFTALMOLOGIA INFANTIL", "ONCOLOGIA", "ONCOLOGIA INFANTIL", "OTORRINOLARINGOLOGIA", "OTORRINOLARINGOLOGIA INFANTIL", "PEDIATRIA", "PROCTOLOGIA", "PSICOLOGIA  - NIÑOS", "PSICOLOGIA - ADOLESCENTES - ADULTOS ", "PSIQUIATRIA - ADULTOS", "PSIQUIATRIA - INFANTO JUVENIL", "REUMATOLOGIA", "REUMATOLOGIA INFANTIL", "RX  ODONTOLOGIA", "TOCOGINECOLOGIA", "TRAUMATOLOGIA", "TRAUMATOLOGIA  Y ORTOPEDIA", "TRAUMATOLOGIA INFANTIL", "UROLOGIA", "UROLOGIA INFANTIL"];
localStorage.setItem('arrayespecialidades', JSON.stringify(arrayespecialidades))
var usuario = {
    nombre: 'jorge',
    id: '00001'
}
// const doctor = new Doctor(nombre, apellido, telefono, especialidad, matricula, cuil, domicilio, provincia, localiad, codigopostal);

const doctores = [{
        nombre: 'MARIA BELEN',
        apellido: 'ABRAHAN',
        especialidad: 'ALERGOLOGIA',
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
        nombre: 'ANDRES',
        apellido: 'ANZORENA',
        especialidad: 'CARDIOLOGIA',
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
        nombre: 'SILVANA RITA',
        apellido: 'DEPETRIS',
        especialidad: 'CARDIOLOGIA',
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
        nombre: 'SILIVIA LOURDES',
        apellido: 'LORENZO',
        especialidad: 'GASTROENTEROLOGIA',
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
        nombre: 'JOEL',
        apellido: 'CARABAJAL',
        especialidad: 'TRAUMATOLOGIA',
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
    
const turno_paciente = guardar_turno()
borrar_turno(turno_paciente)

    alert('confirmado')
}









