function calendarioDoc() {
  let selectDoctors = document.querySelector("#cargaDoc");
  selectDoctors.addEventListener("change", function() {
    const tablaHorarios = document.getElementById('horarios-doctores');
    tablaHorarios.innerHTML = '';
    const matriculaP = selectDoctors.value;
    const doctores = JSON.parse(localStorage.getItem("rDoctores"));
    const turnos = JSON.parse(localStorage.getItem("rTurnos"));
    for (let i = 0; i < doctores.length; i++) {
      const doctor = doctores[i];
      if (doctor.matriculaP == matriculaP) {
        const horarios = [
          "08:00 - 09:00",
          "09:00 - 10:00",
          "10:00 - 11:00",
          "11:00 - 12:00",
          "12:00 - 13:00",
          "13:00 - 14:00"
        ];
        const dias = doctor.dias[0];
        let filas = "";
        for (const horario of horarios) {
          filas += `
                    <tr>
                    <td>${horario.split("-").join(" ")}</td>
                    <td>${
                      dias.Lunes.indexOf(horario) > -1
                        ? "Disponible"
                        : turnos.some(
                            t =>
                              t.doctores == doctor.cuil &&
                              t.dias == "Lunes" &&
                              t.horario == horario
                          )
                        ? "Ocupado"
                        : "-"
                    }</td>
                    <td>${
                      dias.Martes.indexOf(horario) > -1
                        ? "Disponible"
                        : turnos.some(
                            t =>
                              t.doctores == doctor.cuil &&
                              t.dias == "Martes" &&
                              t.horario == horario
                          )
                        ? "Ocupado"
                        : "-"
                    }</td>
                    <td>${
                      dias.Miercoles.indexOf(horario) > -1
                        ? "Disponible"
                        : turnos.some(
                            t =>
                              t.doctores == doctor.cuil &&
                              t.dias == "Miercoles" &&
                              t.horario == horario
                          )
                        ? "Ocupado"
                        : "-"
                    }</td>
                    <td>${
                      dias.Jueves.indexOf(horario) > -1
                        ? "Disponible"
                        : turnos.some(
                            t =>
                              t.doctores == doctor.cuil &&
                              t.dias == "Jueves" &&
                              t.horario == horario
                          )
                        ? "Ocupado"
                        : "-"
                    }</td>
                    <td>${
                      dias.Viernes.indexOf(horario) > -1
                        ? "Disponible"
                        : turnos.some(
                            t =>
                              t.doctores == doctor.cuil &&
                              t.dias == "Viernes" &&
                              t.horario == horario
                          )
                        ? "Ocupado"
                        : "-"
                    }</td>
                    <td>${
                      dias.Sabado.indexOf(horario) > -1
                        ? "Disponible"
                        : turnos.some(
                            t =>
                              t.doctores == doctor.cuil &&
                              t.dias == "Sabado" &&
                              t.horario == horario
                          )
                        ? "Ocupado"
                        : "-"
                    }</td>
                    </tr>
                    `;
        }
        tablaHorarios.innerHTML = filas;
      }
    }
  });
}
calendarioDoc();
