function confirmarDoc(element){
    const resultadoSi = element.closest('tr').querySelector('.aprobado');
    resultadoSi.innerHTML = ` Si `;
}
function confirmadoPac(element){
    const resultadoPacSi = element.closest('tr').querySelector('.aprobadosP');
    resultadoPacSi.innerHTML = ` Si `;
}
