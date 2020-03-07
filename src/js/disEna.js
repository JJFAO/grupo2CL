function clicking() {
    let checks = document.querySelectorAll("#checks");
    let selects = document.querySelectorAll(".horarios");
    if (checks[0].checked == true) {
        selects[0].disabled=false;
    }    else {
        selects[0].disabled=true;
    }
    if (checks[1].checked == true) {
        selects[1].disabled=false;
    }    else {
        selects[1].disabled=true;
    }
    if (checks[2].checked == true) {
        selects[2].disabled=false;
    }    else {
        selects[2].disabled=true;
    }
    if (checks[3].checked == true) {
        selects[3].disabled=false;
    }    else {
        selects[3].disabled=true;
    }
    if (checks[4].checked == true) {
        selects[4].disabled=false;
    }    else {
        selects[4].disabled=true;
    }
}