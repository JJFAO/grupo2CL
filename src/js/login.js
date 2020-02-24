function hideModalRecover() {
    $('#indexModal').modal("hide");
    $('#modalrecover').modal("show");
}
function hideModalpp() {
    $('#ppmodal').modal("hide");
    
    
}
function recoverPass() {
    Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Mensaje enviado',
    showConfirmButton: false,
    timer: 5500
  })}
  const usuarios = [{DNI: 28721218 , pass:"1234"}]

  function validation4Patient () {
     let dniHtml = document.querySelector("#DNI")
     let passHtml = document.querySelector("#passPatient")
     usuarios.forEach(usuario => {
         if (dniHtml.value !== usuarios[DNI] ){
            alert("El DNI no esta registrado")
         }
         usuarios.forEach(usuario => {
            if (passHtml.value !== usuarios[pass] ){
                alert("La contraseña no existe")
             }
             
         });

         
     });
      

  }