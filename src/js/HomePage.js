let menuDesplegado = document.querySelector("#menuDesplegado")
let menuBusqueda = document.querySelector("#menuBusqueda")
let botonLogueo = document.querySelector("#botonLogueo")
let desplegado = false

menuDesplegado.addEventListener("click", menuStatusHandler);
function menuStatusHandler() {
    if (desplegado == false) {
        desplegado = !desplegado
        menuBusqueda.classList.add("d-none")
        botonLogueo.classList.add("d-none")

    } else if (desplegado == true) {
        desplegado = !desplegado
        menuBusqueda.classList.remove("d-none")
        botonLogueo.classList.remove("d-none")
    }
}

menuBusqueda.addEventListener("click", menuStatusHandler2);
function menuStatusHandler2() {
    if (desplegado == false) {
        desplegado = !desplegado
        menuDesplegado.classList.add("d-none")
        botonLogueo.classList.add("d-none")

    } else if (desplegado == true) {
        desplegado = !desplegado
        menuDesplegado.classList.remove("d-none")
        botonLogueo.classList.remove("d-none")
    }
}

let inicio = document.querySelector("#inicio")
let pacientes = document.querySelector("#pacientes")
let institucional = document.querySelector("#institucional")
let servicios = document.querySelector("#servicios")
let profesionales = document.querySelector("#profesionales")
let contacto = document.querySelector("#contacto")
let botonInicio = false
let botonPacientes = false
let botonInstitucional = false
let botonServicios = false
let botonProfesionales = false
let botonContacto = false

inicio.addEventListener("click", botonInicioHandler);
function botonInicioHandler() {
    if (botonInicio == false) {
        botonInicio = !botonInicio
        inicio.classList.add("activeSeba")
        pacientes.classList.remove("activeSeba")
        institucional.classList.remove("activeSeba")
        servicios.classList.remove("activeSeba")
        profesionales.classList.remove("activeSeba")
        contacto.classList.remove("activeSeba")
    } else if (botonInicio == true) {
        botonInicio = !botonInicio
        inicio.classList.remove("activeSeba")
    }
}
pacientes.addEventListener("click", botonPacientesHandler);
function botonPacientesHandler() {
    if (botonPacientes == false) {
        botonPacientes = !botonPacientes
        pacientes.classList.add("activeSeba")
        inicio.classList.remove("activeSeba")
        institucional.classList.remove("activeSeba")
        servicios.classList.remove("activeSeba")
        profesionales.classList.remove("activeSeba")
        contacto.classList.remove("activeSeba")
    } else if (botonPacientes == true) {
        botonPacientes = !botonPacientes
        pacientes.classList.remove("activeSeba")
    }
}
institucional.addEventListener("click", botonInstitucionalHandler);
function botonInstitucionalHandler() {
    if (botonInstitucional == false) {
        botonInstitucional = !botonInstitucional
        institucional.classList.add("activeSeba")
        inicio.classList.remove("activeSeba")
        pacientes.classList.remove("activeSeba")
        servicios.classList.remove("activeSeba")
        profesionales.classList.remove("activeSeba")
        contacto.classList.remove("activeSeba")
    } else if (botonInstitucional == true) {
        botonInstitucional = !botonInstitucional
        institucional.classList.remove("activeSeba")
    }
}
servicios.addEventListener("click", botonServiciosHandler);
function botonServiciosHandler() {
    if (botonServicios == false) {
        botonServicios = !botonServicios
        servicios.classList.add("activeSeba")
        inicio.classList.remove("activeSeba")
        pacientes.classList.remove("activeSeba")
        institucional.classList.remove("activeSeba")
        profesionales.classList.remove("activeSeba")
        contacto.classList.remove("activeSeba")
    } else if (botonServicios == true) {    
        botonServicios = !botonServicios
        servicios.classList.remove("activeSeba")
    }
}
profesionales.addEventListener("click", botonProfesionalesHandler);
function botonProfesionalesHandler() {
    if (botonProfesionales == false) {
        botonProfesionales = !botonProfesionales
        profesionales.classList.add("activeSeba")
        inicio.classList.remove("activeSeba")
        pacientes.classList.remove("activeSeba")
        institucional.classList.remove("activeSeba")
        servicios.classList.remove("activeSeba")
        contacto.classList.remove("activeSeba")
    } else if (botonProfesionales == true) {
        botonProfesionales = !botonProfesionales
        profesionales.classList.remove("activeSeba")
    }
}
contacto.addEventListener("click", botonContactoHandler);
function botonContactoHandler() {
    if (botonContacto == false) {
        botonContacto = !botonContacto
        contacto.classList.add("activeSeba")
        inicio.classList.remove("activeSeba")
        pacientes.classList.remove("activeSeba")
        institucional.classList.remove("activeSeba")
        servicios.classList.remove("activeSeba")
        profesionales.classList.remove("activeSeba")
    } else if (botonContacto == true) {
        botonContacto = !botonContacto
        contacto.classList.remove("activeSeba")
    }
}