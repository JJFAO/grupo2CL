var arrayespecialidades = ["ALERGOLOGIA", "ANESTESIOLOGIA", "BIOQUIMICO", "CARDIOLOGIA", "CARDIOLOGIA INFANTIL", "CIRUGIA CARDIOVASCULAR", "CIRUGIA DE CABEZA Y CUELLO", "CIRUGIA GENERAL", "CIRUGIA PEDIATRICA", "CLINICA", "DERMATOLOGIA", "DIAGNOSTICO POR IMAGENES", "ECOGRAFIA", "EMERGENCIA", "ENDOCRINOLOGIA", "ENDOCRINOLOGIA INFANTIL", "FLEBOLOGIA Y LINFOLOGIA", "GASTROENTEROLOGIA", "GASTROENTEROLOGIA INFANTIL", "GINECOLOGIA", "HEMATOLOGIA", "HEMOTERAPIA", "HEMOTERAPIA", "INFECTOLOGIA INFANTIL", "INMUNOLOGIA", "MASTOLOGIA", "MEDICINA DEL DEPORTE", "MEDICINA GENERAL", "MEDICO", "NEFROLOGIA", "NEFROLOGIA INFANTIL", "NEONATOLOGIA", "NEUMONOLOGIA", "NEUMONOLOGIA INFANTIL", "NEUROCIRUGIA", "NEUROCIRUGIA INFANTIL", "NEUROLOGIA", "NEUROLOGIA INFANTIL", "NUTRICION", "ODONTOLOGIA - ENDODONCIA ", "ODONTOLOGIA -CIRUGIA", "ODONTOLOGIA -PERIODONCIA", "ODONTOLOGIA GENERAL", "ODONTOPEDIATRIA", "OFTALMOLOGIA", "OFTALMOLOGIA INFANTIL", "ONCOLOGIA", "ONCOLOGIA INFANTIL", "OTORRINOLARINGOLOGIA", "OTORRINOLARINGOLOGIA INFANTIL", "PEDIATRIA", "PROCTOLOGIA", "PSICOLOGIA  - NIÑOS", "PSICOLOGIA - ADOLESCENTES - ADULTOS ", "PSIQUIATRIA - ADULTOS", "PSIQUIATRIA - INFANTO JUVENIL", "REUMATOLOGIA", "REUMATOLOGIA INFANTIL", "RX  ODONTOLOGIA", "TOCOGINECOLOGIA", "TRAUMATOLOGIA", "TRAUMATOLOGIA  Y ORTOPEDIA", "TRAUMATOLOGIA INFANTIL", "UROLOGIA", "UROLOGIA INFANTIL"];
localStorage.setItem('arrayespecialidades', JSON.stringify(arrayespecialidades))
var usuario= {
    nombre: 'jorge',
    id: '00001'
}
// const doctor = new Doctor(nombre, apellido, telefono, especialidad, matricula, cuil, domicilio, provincia, localiad, codigopostal);

const doctores = [{
        nombre: 'MARIA BELEN',
        apellido: 'ABRAHAN',
        especialidad: 'ALERGOLOGIA',
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
        dias: [{
            lunes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
            martes: [],
            miercoles: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
            jueves: [],
            viernes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00']
        }]
    }

]
// let especialidades= localStorage.getItem('arrayespecialidades')
//Codigo a Ejecutar al Cargar la Pagina
function myOnLoad() {
    cargar_select(arrayespecialidades, '#especialidad')
}
// funcion para Cargar Provincias al campo <select>
function cargar_select(array, id) {
    // Ordena el Array Alfabeticamente, es muy facil ;)):
    array.sort();
    addOptions(id, array);
}
// Rutina para agregar opciones a un <select>
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

function filtrar_doctores() {
    const especialidadeshtml = document.querySelector("#especialidad")
    const doctoresFiltrado = doctores.filter(doctor => doctor.especialidad == especialidadeshtml.value)

    const docFiltradosarray = doctoresFiltrado.map(function (profesional) {
        return profesional.nombre + " " + profesional.apellido
    })
    return docFiltradosarray
}

function cargar_doctores() {
    const docFiltradosarray = (filtrar_doctores())
    const nohaydoc = ["no tenemos doctores disponibles para esa especialidad"]
    if (docFiltradosarray.length == 0) {
        cargar_select(nohaydoc, "#doctores")
    } else {
        cargar_select(docFiltradosarray, "#doctores")
    }
}

function filtrar_dias() {
    const doctorhtml = document.querySelector("#doctores")
    const docFiltradosarray = (filtrar_doctores())
    // console.log(docFiltradosarray);
    docFiltradosarray.forEach(doc => {
        if (doc == doctorhtml.value) {
            docFiltrado = doc
        }
    });
    // const docFiltrado = docFiltradosarray.filter(function (dias) { 
    //     console.log(dias);
    //     console.log(doctorhtml.value);        
    //    return dias == doctorhtml.value
    // })
    console.log(docFiltrado);
    const namearray = docFiltrado.split(' ');
    console.log(namearray);
   let nombre_doc = '' //preguntar ///////////////////////////////////////////////////////////////////////////////
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
    console.log(filnombre_y_apellido);
    
    return filnombre_y_apellido
}

function dias_disponibles() {
    const doctorhtml = document.querySelector("#doctores")
    const filnombre_y_apellido = (filtrar_dias())
    console.log('plis'+filnombre_y_apellido);
    
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
      const diasdisponibles = (dias_disponibles())
    addOptions("#dias", diasdisponibles);
}


// function cargar_dias() {
//     const doctorhtml = document.querySelector("#doctores")
//     const docFiltrados = doctores.filter((day) => {
//         const nombre_completo = day.nombre + " " + day.apellido
//         return nombre_completo == doctorhtml.value
//     })
//     console.log(docFiltrados);
//     const diasArray = docFiltrados[0].dias[0]
//     console.log(diasArray);
//     const diasdisponibles = []
//     for (const i in diasArray) {
//         if (diasArray.hasOwnProperty(i)) {
//             const dias = diasArray[i];
//             console.log(dias.length); 
//             if (dias.length !== 0) {
//                 diasdisponibles.push(i)
//             }
//         }
//     }
//     addOptions("#dias", diasdisponibles);
// }

function filtrar_horario() {
    const diashtml = document.querySelector("#dias")
    // const diasdisponibles = (dias_disponibles())
    // dia_elegido =''//preguntarrr################################################################
    // diasdisponibles.forEach(dias => {
    //     if (dias == diashtml.value) {
    //         dia_elegido = dias
    //     }
    //     console.log(dia_elegido);        
    // });
    const docFiltradosarray = (filtrar_dias())
    console.log('nose='+ docFiltradosarray);
    const day = diashtml.value
    console.log(day);
    
    const horasArray = docFiltradosarray[0].dias[0][day]//preguntar ########################################################3
    console.log(horasArray);
    // const diasdisponibles = []
    // for (const i in diasArray) {
    //     if (diasArray.hasOwnProperty(i)) {
    //         const dias = diasArray[i];
    //         // console.log(dias.length); 
    //         if (dias.length !== 0) {
    //             diasdisponibles.push(i)
    //         }
    //     }
    // }
    
    
   
}


function cargar_horario() {
    filtrar_horario()
}