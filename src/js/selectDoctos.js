function selects (){
    let especialidadesDoc = ["ALERGOLOGIA", "ANESTESIOLOGIA", "BIOQUIMICO", "CARDIOLOGIA", "CARDIOLOGIA INFANTIL", "CIRUGIA CARDIOVASCULAR", "CIRUGIA DE CABEZA Y CUELLO", "CIRUGIA GENERAL", "CIRUGIA PEDIATRICA", "CLINICA", "DERMATOLOGIA", "DIAGNOSTICO POR IMAGENES", "ECOGRAFIA", "EMERGENCIA", "ENDOCRINOLOGIA", "ENDOCRINOLOGIA INFANTIL", "FLEBOLOGIA Y LINFOLOGIA", "GASTROENTEROLOGIA", "GASTROENTEROLOGIA INFANTIL", "GINECOLOGIA", "HEMATOLOGIA", "HEMOTERAPIA", "HEMOTERAPIA", "INFECTOLOGIA INFANTIL", "INMUNOLOGIA", "MASTOLOGIA", "MEDICINA DEL DEPORTE", "MEDICINA GENERAL", "MEDICO", "NEFROLOGIA", "NEFROLOGIA INFANTIL", "NEONATOLOGIA", "NEUMONOLOGIA", "NEUMONOLOGIA INFANTIL", "NEUROCIRUGIA", "NEUROCIRUGIA INFANTIL", "NEUROLOGIA", "NEUROLOGIA INFANTIL", "NUTRICION", "ODONTOLOGIA - ENDODONCIA ", "ODONTOLOGIA - CIRUGIA", "ODONTOLOGIA - PERIODONCIA", "ODONTOLOGIA GENERAL", "ODONTOPEDIATRIA", "OFTALMOLOGIA", "OFTALMOLOGIA INFANTIL", "ONCOLOGIA", "ONCOLOGIA INFANTIL", "OTORRINOLARINGOLOGIA", "OTORRINOLARINGOLOGIA INFANTIL", "PEDIATRIA", "PROCTOLOGIA", "PSICOLOGIA - NIÑOS", "PSICOLOGIA - (JOVENES - ADULTOS) ", "PSIQUIATRIA - ADULTOS", "PSIQUIATRIA - INFANTO JUVENIL", "REUMATOLOGIA", "REUMATOLOGIA INFANTIL", "RX  ODONTOLOGIA", "TOCOGINECOLOGIA", "TRAUMATOLOGIA", "TRAUMATOLOGIA  Y ORTOPEDIA", "TRAUMATOLOGIA INFANTIL", "UROLOGIA", "UROLOGIA INFANTIL"];
    let provincias = ["Buenos Aires","Catamarca","Chaco","Chubut","Córdoba","Corrientes","Entre Ríos","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquén","Río Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego","Tucumán"];     
    
    function ordenar() {
        especialidadesDoc.sort();
        provincias.sort();
    }

    for (let index = 0; index < especialidadesDoc.length; index++) {
        document.querySelector("#especialidad").innerHTML += `<option value="`+especialidadesDoc[index]+`"` + `>` + especialidadesDoc[index] + `</option>`;
    }
    for (let index = 0; index < provincias.length; index++) {
        document.querySelector("#provincia").innerHTML += `<option value="`  + provincias[index] + `"`+`>` + provincias[index] + `</option>`;
    }
}