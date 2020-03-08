function getRegisterD() {
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

    console.log(registro);

    const nDoctores = JSON.parse(localStorage.getItem('rDoctores')) || [];
    nDoctores.push(registro);
    localStorage.setItem('rDoctores',JSON.stringify(nDoctores))
}

function errorEnvio(){
    $('#modalError').modal('show');
}

function Registrado(){
    $('#modalRegistrado').modal('show');
}