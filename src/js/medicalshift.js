var arrayespecialidades = ["Alergología", "Anestesiología", "Bioquímico", "Cardiología", "Cardiología Infantil", "Cirugía Cardiovascular", "Cirugía de Cabeza y Cuello", "Cirugía General", "Cirugía Pediatrica", "Clínica", "Dermatología", "Diagnóstico por Imágenes", "Ecografía", "Emergencia", "Endocrinología", "Endocrinología Infantil", "Flebología Y Linfología", "Gastroenterología", "Gastroenterología Infatil", "Ginecología", "Hematología", "Hemoterapia", "Hemoterapia", "Infectología Infantil", "Inmunología", "Mastología", "Medicina del Deporte", "Medicina General", "Médico", "Nefrología", "Nefrología Infantil", "Neonatología", "Neumonología", "Neumonología Infantil", "Neurocirugía", "Neurocirugía Infantil", "Neurología", "Neurología Infantil", "Nutrición", "Odontología - Endodoncia", "Odontología - Cirugía", "Odontología - Periodoncia", "Odontología General", "Odontopediatría", "Oftalmología", "Oftalmología Infantil", "Oncología", "Oncología Infantil", "Otorrinolaringología", "Otorrinolaringología Infantil", "Pediatría", "Proctología", "Psicología - Niños", "Psicología - Adolescentes - Adultos", "Psiquiatría - Adultos", "Psiquiatría - Infanto Juvenil", "Reumatología", "Reumatología Infantil", "RX - Odontología", "Tocoginecología", "Traumatología", "Traumatología y Ortodopedia", "Traumatología Infantil", "Urología", "Urología Infantil"];
localStorage.setItem('arrayespecialidades', JSON.stringify(arrayespecialidades))
var usuario = {
    nombre: 'jorge',
    id: '00001'
}
// const doctor = new Doctor(nombre, apellido, telefono, especialidad, matricula, cuil, domicilio, provincia, localiad, codigopostal);

// const doctores = [{
//         nombre: 'María Belén',
//         apellido: 'Abraham',
//         especialidad: 'Alergología',
//         cuil: '000000000000',
//         dias: [{
//             lunes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
//             martes: [],
//             miercoles: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
//             jueves: [],
//             viernes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00']
//         }]
//     },
//     {
//         nombre: 'Andrés',
//         apellido: 'Anzorena',
//         especialidad: 'Cardiología',
//         cuil: '11111111111',
//         dias: [{
//             lunes: [],
//             martes: [],
//             miercoles: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
//             jueves: [],
//             viernes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00']
//         }]
//     },
//     {
//         nombre: 'Silvina Rita',
//         apellido: 'Depetris',
//         especialidad: 'Cardiología',
//         cuil: '22222222222',
//         dias: [{
//             lunes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
//             martes: [],
//             miercoles: ['10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
//             jueves: [],
//             viernes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00']
//         }]
//     },
//     {
//         nombre: 'Silvia Lourdes',
//         apellido: 'Lorenzo',
//         especialidad: 'Gastroenterología',
//         cuil: '3333333333',
//         dias: [{
//             lunes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
//             martes: [],
//             miercoles: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
//             jueves: [],
//             viernes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00']
//         }]
//     },
//     {
//         nombre: 'Joel',
//         apellido: 'Carabajal',
//         especialidad: 'Traumatología',
//         cuil: '44444444444',
//         dias: [{
//             lunes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
//             martes: [],
//             miercoles: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00'],
//             jueves: [],
//             viernes: ['9:00 a 10:00', '10:00 a 1:00', '11:00 a 12:00', '12:00 a 13:00']
//         }]
//     }
// ]
// localStorage.setItem("rDoctores", JSON.stringify(doctores))
const doctores = JSON.parse(localStorage.getItem("rDoctores"))
console.log(doctores);

function inicioshift() {
   
        let select = document.querySelector("#especialidad");
        for (let i = select.options.length; i >= 1; i--) {
            select.remove(i);
        }
        let select1 = document.querySelector("#doctores");
        for (let i = select1.options.length; i >= 1; i--) {
            select1.remove(i);
        }let select2 = document.querySelector("#dias");
        for (let i = select2.options.length; i >= 1; i--) {
            select2.remove(i);
        }let select3 = document.querySelector("#horario");
        for (let i = select3.options.length; i >= 1; i--) {
            select3.remove(i);
        }
        const log= 'no logueado'
        if (log== 'logueado') {

            myOnLoad() 
        } else {
           alert('debe loguearse para solicitar turno') 
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
        option.text = array[j].texto;
        option.value = array[j].value;
        select.add(option);
    }
}

function cargarOptions(id, array) { //carga los opcion pasandole una array e id
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

// let especialidades= localStorage.getItem('arrayespecialidades')
//Codigo a Ejecutar al Cargar la Pagina
function myOnLoad() {
    const arrayesp = esp_sinRepetidos.map((esp, i) => {
        return {
            texto: esp,
            value: esp
        }
    })
    cargar_select(arrayesp, '#especialidad')
}

function cargar_select(array, id) {
    // Ordena el Array Alfabeticamente, es muy facil ;)):
    array.sort();
    addOptions(id, array);
}

function filtrar_doctores() {
    const especialidadeshtml = document.querySelector("#especialidad")
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
    const docsnamecuil = array_doc_filt.map(function (profesional) {
        return {
            texto: profesional.nombre + " " + profesional.apellido,
            value: profesional.cuil
        }
    });
    cargar_select(docsnamecuil, "#doctores")
}

function dias_disponibles() {
    const doctorhtml = document.querySelector("#doctores")
    const filnombre_y_apellido = (convertir_cuil_en_doc(doctorhtml.value))
    const diasArray = filnombre_y_apellido[0].dias[0] //preguntar ########################################################3
    
    const diasdisponibles = []
    for (const i in diasArray) {
        if (diasArray.hasOwnProperty(i)) {
            const dias = diasArray[i];
            if (dias.length !== 0) {
                diasdisponibles.push(i)
            }
        }
    }
    console.log(diasdisponibles);
    return diasdisponibles
    
}

function cargar_dias() {
    cargarOptions('#dias', dias_disponibles())
}

function convertir_cuil_en_doc(cuil) { // a esta funcion le ingreso el cuil del doctor y me devuelve el objeto doctor
    const doctor_objeto = doctores.filter(doctor => doctor.cuil == cuil)
    return doctor_objeto

}


function filtrar_horarios() {
    const doctorhtml = document.querySelector("#doctores")
    const filnombre_y_apellido = (convertir_cuil_en_doc(doctorhtml.value))
    const day = document.querySelector("#dias").value
    const array = filnombre_y_apellido[0].dias[0][day]
    return array
}

function cargar_horario() {
    const array = filtrar_horarios()
    console.log(array);
    
    cargarOptions("#horario", array)
}

function guardar_turno() {
    const inputs = document.querySelectorAll('.datos');
    const registro = {};
    inputs.forEach((dato) => {
        registro[dato.id] = dato.value
    });
    console.log(registro);
    const nTurnos = JSON.parse(localStorage.getItem('rTurnos')) || [];
    console.log(nTurnos);
    nTurnos.push(registro);
    localStorage.setItem('rTurnos', JSON.stringify(nTurnos))
    return registro
}

function borrar_turno(obj) {
    console.log(obj.doctores) //cuil de doctor
    console.log(obj.dias);
    console.log(obj.horario);
    const doctor_obj = (convertir_cuil_en_doc(obj.doctores))
    console.log(doctor_obj);
    const horas_filtradas = doctor_obj[0].dias[0][obj.dias]
    console.log(horas_filtradas);
    horas_borradas = horas_filtradas.filter(doctor => doctor != obj.horario)
    doctor_obj[0].dias[0][obj.dias]= horas_borradas
    localStorage.setItem("rDoctores", JSON.stringify(doctores))
}

function MENSAJE_CONFIR() {
    Swal.fire({
        icon: 'success',
        title: 'TURNO CONFIRMADO',
        showConfirmButton: false,
    })
}

function MENSAJE_error() {
    Swal.fire({
        icon: 'error',
        title: 'DEBE LLENAR TODO LOS CAMPOS PARA CONFIRMAR EL TURNO',
        showConfirmButton: false,
    })
}

function MENSAJE_error_medico() {
    Swal.fire({
        icon: 'error',
        title: 'este doctor ya no tiene turnos disponibles, elija otro medico',
        showConfirmButton: false,
    })
}

function confirmar() {
    if ((document.querySelector("#especialidad").value == "Seleccione una Especialidad...") || (document.querySelector("#doctores").value == "Seleccione un Profesional...") || (document.querySelector("#dias").value == "Días disponibles...") || (document.querySelector("#horario").value == "Seleccione un horario...")) {
        MENSAJE_error()
        }else{
        const turno_paciente = guardar_turno()
        borrar_turno(turno_paciente)    
        MENSAJE_CONFIR()}
        inicioshift()
}