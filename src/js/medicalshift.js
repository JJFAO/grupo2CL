var arrayespecialidades = ["ALERGOLOGIA", "ANESTESIOLOGIA", "BIOQUIMICO", "CARDIOLOGIA", "CARDIOLOGIA INFANTIL", "CIRUGIA CARDIOVASCULAR", "CIRUGIA DE CABEZA Y CUELLO", "CIRUGIA GENERAL", "CIRUGIA PEDIATRICA", "CLINICA", "DERMATOLOGIA", "DIAGNOSTICO POR IMAGENES", "ECOGRAFIA", "EMERGENCIA", "ENDOCRINOLOGIA", "ENDOCRINOLOGIA INFANTIL", "FLEBOLOGIA Y LINFOLOGIA", "GASTROENTEROLOGIA", "GASTROENTEROLOGIA INFANTIL", "GINECOLOGIA", "HEMATOLOGIA", "HEMOTERAPIA", "HEMOTERAPIA", "INFECTOLOGIA INFANTIL", "INMUNOLOGIA", "MASTOLOGIA", "MEDICINA DEL DEPORTE", "MEDICINA GENERAL", "MEDICO", "NEFROLOGIA", "NEFROLOGIA INFANTIL", "NEONATOLOGIA", "NEUMONOLOGIA", "NEUMONOLOGIA INFANTIL", "NEUROCIRUGIA", "NEUROCIRUGIA INFANTIL", "NEUROLOGIA", "NEUROLOGIA INFANTIL", "NUTRICION", "ODONTOLOGIA - ENDODONCIA ", "ODONTOLOGIA -CIRUGIA", "ODONTOLOGIA -PERIODONCIA", "ODONTOLOGIA GENERAL", "ODONTOPEDIATRIA", "OFTALMOLOGIA", "OFTALMOLOGIA INFANTIL", "ONCOLOGIA", "ONCOLOGIA INFANTIL", "OTORRINOLARINGOLOGIA", "OTORRINOLARINGOLOGIA INFANTIL", "PEDIATRIA", "PROCTOLOGIA", "PSICOLOGIA  - NIÑOS", "PSICOLOGIA - ADOLESCENTES - ADULTOS ", "PSIQUIATRIA - ADULTOS", "PSIQUIATRIA - INFANTO JUVENIL", "REUMATOLOGIA", "REUMATOLOGIA INFANTIL", "RX  ODONTOLOGIA", "TOCOGINECOLOGIA", "TRAUMATOLOGIA", "TRAUMATOLOGIA  Y ORTOPEDIA", "TRAUMATOLOGIA INFANTIL", "UROLOGIA", "UROLOGIA INFANTIL"];
localStorage.setItem('arrayespecialidades', JSON.stringify(arrayespecialidades))

const doctor = new Doctor(nombre, apellido, telefono, especialidad, matricula, cuil, domicilio, provincia, localiad, codigopostal);

const doctores = [
    {nombre : 'MARIA BELEN',
    apellido: 'ABRAHAN',
    especialidad :'ALERGOLOGIA',
    horarios: ['2020-02-28 14:00']
    },
    {nombre : 'ANDRES',
    apellido: 'ANZORENA',
    especialidad :'CARDIOLOGIA',
    horarios: ['2020-02-27 14:00']
    },
    {nombre : 'SILVANA RITA',
    apellido: 'DEPETRIS',
    especialidad :'DERMATOLOGIA',
    horarios: ['2020-02-26 14:00']
    },
    {nombre : 'SILIVIA LOURDES',
    apellido: 'LORENZO',
    especialidad :'GASTROENTEROLOGIA',
    horarios: ['2020-02-25 14:00']
    },
    {nombre : 'JOEL',
    apellido: 'CARABAJAL',
    especialidad :'TRAUMATOLOGIA',
    horarios: ['2020-02-24 14:00']
    }
    
]

// let especialidades= localStorage.getItem('arrayespecialidades')
//Codigo a Ejecutar al Cargar la Pagina
function myOnLoad() {
    cargar_especialidad()
}

// funcion para Cargar Provincias al campo <select>
function cargar_especialidad() {

    // Ordena el Array Alfabeticamente, es muy facil ;)):
    arrayespecialidades.sort();
    addOptions("especialidad", arrayespecialidades);
}

// Rutina para agregar opciones a un <select>
function addOptions(domElement, arrayespecialidades) {
    var select = document.querySelector('#especialidad');
    for (value in arrayespecialidades) {
        var option = document.createElement("option");
        option.text = arrayespecialidades[value];
        select.add(option);
    }
}

