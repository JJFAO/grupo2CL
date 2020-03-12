var arrayespecialidades = ["Alergología", "Anestesiología", "Bioquímico", "Cardiología", "Cardiología Infantil", "Cirugía Cardiovascular", "Cirugía de Cabeza y Cuello", "Cirugía General", "Cirugía Pediatrica", "Clínica", "Dermatología", "Diagnóstico por Imágenes", "Ecografía", "Emergencia", "Endocrinología", "Endocrinología Infantil", "Flebología Y Linfología", "Gastroenterología", "Gastroenterología Infatil", "Ginecología", "Hematología", "Hemoterapia", "Hemoterapia", "Infectología Infantil", "Inmunología", "Mastología", "Medicina del Deporte", "Medicina General", "Médico", "Nefrología", "Nefrología Infantil", "Neonatología", "Neumonología", "Neumonología Infantil", "Neurocirugía", "Neurocirugía Infantil", "Neurología", "Neurología Infantil", "Nutrición", "Odontología - Endodoncia", "Odontología - Cirugía", "Odontología - Periodoncia", "Odontología General", "Odontopediatría", "Oftalmología", "Oftalmología Infantil", "Oncología", "Oncología Infantil", "Otorrinolaringología", "Otorrinolaringología Infantil", "Pediatría", "Proctología", "Psicología - Niños", "Psicología - Adolescentes - Adultos", "Psiquiatría - Adultos", "Psiquiatría - Infanto Juvenil", "Reumatología", "Reumatología Infantil", "RX - Odontología", "Tocoginecología", "Traumatología", "Traumatología y Ortodopedia", "Traumatología Infantil", "Urología", "Urología Infantil"];
localStorage.setItem('arrayespecialidades', JSON.stringify(arrayespecialidades))
var usuario = {
    nombre: 'jorge',
    id: '00001'
}

const doctores = JSON.parse(localStorage.getItem("rDoctores"))
const pacientesForTesting = JSON.parse(localStorage.getItem("usuariologueado"));

function inicioshift() {
    let select = document.querySelector("#especialidad");
    for (let i = select.options.length; i >= 1; i--) {
        select.remove(i);
    }
    let select1 = document.querySelector("#doctores");
    for (let i = select1.options.length; i >= 1; i--) {
        select1.remove(i);
    }
    let select2 = document.querySelector("#dias");
    for (let i = select2.options.length; i >= 1; i--) {
        select2.remove(i);
    }
    let select3 = document.querySelector("#horario");
    for (let i = select3.options.length; i >= 1; i--) {
        select3.remove(i);
    }
    document.querySelector('#textmedicalshit').value = ''
    const log = JSON.parse(localStorage.getItem("usuariologueado"));
    if (log == null) {
        MENSAJE_usuario_nolog()
        $('#MedicalShift').modal('hide')
        // console.log(log);
    } else {
        console.log(log.autorizado);
        
        if (log.autorizado == 'pendiente' || log.autorizado=='no' ) {
            MENSAJE_pendiente()
            $('#MedicalShift').modal('hide')

        } else {
            console.log(log);

            $('#MedicalShift').modal('show')
            myOnLoad()
        }

    }

}

function esp_sinrepetir() {

    let doctores_filtrados = []
    const doctores = JSON.parse(localStorage.getItem("rDoctores"))
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
    return esp_sinRepetidos
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

function myOnLoad() {
    const esp_sinRepetidos = esp_sinrepetir()
    const arrayesp = esp_sinRepetidos.map((esp, i) => {
        return {
            texto: esp,
            value: esp
        }
    })
    cargar_select(arrayesp, '#especialidad')
}

function cargar_select(array, id) {
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
    const diasArray = filnombre_y_apellido[0].dias[0]
    const diasdisponibles = []
    for (const i in diasArray) {
        if (diasArray.hasOwnProperty(i)) {
            const dias = diasArray[i];
            if (dias.length !== 0) {
                diasdisponibles.push(i)
            }
        }
    }
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
    cargarOptions("#horario", array)
}

function guardar_turno() {
    const inputs = document.querySelectorAll('.datos');
    const registro = {};
    const pacientesForTesting = JSON.parse(localStorage.getItem("usuariologueado"));
    registro.nombrePac = pacientesForTesting.nombre
    registro.apelliPopac = pacientesForTesting.apellido
    registro.dniPac = pacientesForTesting.id
    inputs.forEach((dato) => {
        registro[dato.id] = dato.value
    });
    const nTurnos = JSON.parse(localStorage.getItem('rTurnos')) || [];
    nTurnos.push(registro);
    localStorage.setItem('rTurnos', JSON.stringify(nTurnos))
    window.location.assign("index.html");
    return registro

}

function borrar_turno(obj) {
    const doctor_obj = (convertir_cuil_en_doc(obj.doctores))
    const horas_filtradas = doctor_obj[0].dias[0][obj.dias]
    horas_borradas = horas_filtradas.filter(doctor => doctor != obj.horario)
    doctor_obj[0].dias[0][obj.dias] = horas_borradas
    localStorage.setItem("rDoctores", JSON.stringify(doctores))
}

function MENSAJE_CONFIR() {
    Swal.fire({
        icon: 'success',
        title: 'TURNO CONFIRMADO',
        showConfirmButton: false,
    })
    $('#MedicalShift').modal('hide')
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
    } else {
        const turno_paciente = guardar_turno()
        borrar_turno(turno_paciente)
        MENSAJE_CONFIR()
    }
    inicioshift()
}

function MENSAJE_usuario_nolog() {
    Swal.fire({
        icon: 'error',
        title: 'Por favor inicie sección para solicitar un turno',
        showConfirmButton: false,
    })
}

function MENSAJE_pendiente() {
    Swal.fire({
        icon: 'error',
        title: 'Pendiente de autorizacion',
        showConfirmButton: false,
    })
}