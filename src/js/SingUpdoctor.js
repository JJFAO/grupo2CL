function getRegisterD() {
    const inputs = document.querySelectorAll('.datos');
    const registro = {};
    inputs.forEach((dato) => {
        registro[dato.id] = dato.value
    });
    console.log(registro);

    const nDoctores = JSON.parse(localStorage.getItem('rDoctores')) || [];
    nDoctores.push(registro);
    localStorage.setItem('rDoctores',JSON.stringify(nDoctores))
}