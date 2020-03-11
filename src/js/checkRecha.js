function rechazarDoc(elements){
    const resultadoNo = elements.closest('tr').querySelector('.aprobado');
    resultadoNo.innerHTML = ` No `;
}
function rechazadoPac(element){
    const resultadoPacNo = element.closest('tr').querySelector('.aprobadosP');
    resultadoPacNo.innerHTML = ` No `;
}

