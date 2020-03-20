function getRegisterD() {
    let inputValidity = document.getElementById("formDoctor").checkValidity();
    if (inputValidity == false) {
        faltanDatos() 
        $('#MedicalShift').modal('hide');
    }
    else {

        const registro = {};
        const inputs = document.querySelectorAll('.datos');
    inputs.forEach((dato) => {
        registro[dato.id] = dato.value
    });

    const nDoctores = JSON.parse(localStorage.getItem('rDoctores')) || [];

    if (registro.matriculaP == "0" || registro.matriculaP == "") {
        matriculaEn0()
        $('#MedicalShift').modal('hide');
        return
    }
    if (!valDoctor(nDoctores, registro)) {
        return
    }

    const horarios = document.querySelectorAll('.horarios');
    const turnos = {};
    horarios.forEach((h) => {
        turnos[h.id] = Array.from(h.selectedOptions).map(o => o.value);
    });
    registro.dias = [turnos];

    registro.autorizado = 'Pendiente';

    nDoctores.push(registro);
    localStorage.setItem('rDoctores', JSON.stringify(nDoctores));
    $('#modalRegistrado').modal('show')
} 
}

function valDoctor(nDoctores, registro) {
    for (let iDoc = 0; iDoc < nDoctores.length; iDoc++) {
        const doctor = nDoctores[iDoc];
        if (registro.matriculaP == doctor.matriculaP || registro.cuil == doctor.cuil) {
            yaRegistrado()
            $('#MedicalShift').modal('hide')
            return false
        }
    }
    return true
}



function errorEnvio() {
    $('#modalError').modal('show');
}

function faltanDatos() {
    Swal.fire({
        icon: 'error',
        title: 'Por favor, completa todos tus datos para poder avanzar con el registro',
        showConfirmButton: false,
    })
}
function yaRegistrado() {
    Swal.fire({
        icon: 'error',
        title: 'Cuil o Matricula ya registrado',
        showConfirmButton: false,
    })
}
function matriculaEn0() {
    Swal.fire({
        icon: 'error',
        title: 'El campo Matricula no puede quedar vacio',
        showConfirmButton: false,
    })
}
function especialidad0() {
    Swal.fire({
        icon: 'error',
        title: 'Por favor selecciona una especialidad',
        showConfirmButton: false,
    })
}
function newDoc() {
    window.location.assign("index.html")
}