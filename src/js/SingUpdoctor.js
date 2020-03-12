function getRegisterD() {
    let inputTest = document.getElementById("formDoctor").checkValidity();
    if (inputTest !== true) {
        $('#modalFaltanDatos').modal('show');
    }
    
    const nDoctores = JSON.parse(localStorage.getItem('rDoctores')) || [];
    
    const registro = {};
    const inputs = document.querySelectorAll('.datos');
    inputs.forEach((dato) => {
        registro[dato.id] = dato.value
    });
    
    if (!valDoctor(nDoctores, registro)) {
        return
    }

        const horarios = document.querySelectorAll('.horarios');
        const turnos = {};
        horarios.forEach((h) => {
            turnos[h.id] = Array.from(h.selectedOptions).map(o => o.value);
        });
        registro.dias = [turnos];
    
        registro.autorizado = 'Pendiente'
    
        document.getElementById("formDoctor").addEventListener("submit", (e) => {
            e.preventDefault();
            formDoctor.reset();
        });
    
        $('#modalRegistrado').modal('show')
    
        nDoctores.push(registro);
        localStorage.setItem('rDoctores', JSON.stringify(nDoctores))
}

function valDoctor(nDoctores, registro) {
    for (let iDoc = 0; iDoc < nDoctores.length; iDoc++) {
        const doctor = nDoctores[iDoc];
        if (registro.matriculaP == doctor.matriculaP || registro.cuil == doctor.cuil) {
            alert("Matirucla y/o Cuil registrado");
            return false
        }
    }
    return true
}



function errorEnvio() {
    $('#modalError').modal('show');
}

function newDoc() {
    window.location.assign("index.html");
}
