let num1 = 0;
function rechazarDoc() {
    num1 += 1;
    let recha = document.querySelector("#contadorRechazados");
    recha.innerHTML = num1;     
}