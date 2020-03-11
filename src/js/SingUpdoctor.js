function getRegisterD() {
    let inputTest = document.getElementById("formDoctor").checkValidity();
    if (inputTest !== true) {
        $('#modalFaltanDatos').modal('show')
    } else {
        const registro = {};
        const inputs = document.querySelectorAll('.datos');
        inputs.forEach((dato) => {
            registro[dato.id] = dato.value
        });

        const horarios = document.querySelectorAll('.horarios');
        const turnos = {};
        horarios.forEach((h) => {
            turnos[h.id] = Array.from(h.selectedOptions).map(o => o.value);
        });
        registro.dias = [turnos];
        registro.autorizado = "Pendiente"
        $('#modalRegistrado').modal('show')
        const nDoctores = JSON.parse(localStorage.getItem('rDoctores')) || [];
        nDoctores.push(registro);
        localStorage.setItem('rDoctores', JSON.stringify(nDoctores))
    }
}

document.getElementById("formDoctor").addEventListener("submit", (e) => {
    e.preventDefault();
    formDoctor.reset();
});

function errorEnvio() {
    $('#modalError').modal('show');
}

function newDoc() {
    window.location.assign("index.html")
  }
