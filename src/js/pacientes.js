
class Pacientes
 {
    constructor (nombrePaciente, apellidoPaciente, telefonoFijoCliente, edadPaciente, emailPaciente, passPaciente, domicilioPaciente,seleccionProvincia, seleccionLocalidad, postalCliente){
        this.nombre = nombrePaciente;
        this.apellido = apellidoPaciente;
        this.telefono = telefonoFijoCliente;
        this.celular = telefonoMovilCliente;
        this.edad = edadPaciente;
        this.correo = emailPaciente;   
        this.password = passPaciente;
        this.domicilio = domicilioPaciente;
        this.provincia = seleccionProvincia;
        this.localidad = seleccionLocalidad;
        this.codigopostal = postalCliente;
        this.autorizado = 'Pendiente'
    }
}